import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [placa, setPlaca] = useState('');

  const [carsHistory, setCarsHistory] = useState<string[]>([]);

  const loadHistory = useCallback(async () => {
    const usersCollection = firestore().collection('users');

    const email = auth().currentUser?.email;

    const user = await usersCollection.where('email', '==', email).get();

    const carsCollection = firestore().collection(
      'users/' + user.docs[0].id + '/cars',
    );

    carsCollection.get().then(snapshot => {
      let history = new Set<string>();

      snapshot.docs.map(doc => {
        history.add(doc.data().placa);
      });

      setCarsHistory([...history]);
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadHistory();
    }, [loadHistory]),
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Insira a placa "
        value={placa}
        onChangeText={setPlaca}
        textAlign="center"
        autoFocus
        placeholderTextColor="#0c0c0c"
        style={styles.textInput}
      />
      <RectButton
        style={styles.button}
        onPress={() => {
          navigation.navigate('Page2', {placa});
        }}>
        <Text style={styles.text}>Pesquisar</Text>
      </RectButton>

      <View style={styles.scrollView}>
        <FlatList
          data={carsHistory}
          keyExtractor={car => car}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Page2', {placa: item});
              }}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
