import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [placa, setPlaca] = useState('');

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
    </View>
  );
};

export default Home;
