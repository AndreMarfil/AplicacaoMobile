import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [placa, setPlaca] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Procurar por placa:</Text>
      <TextInput
        placeholder="Inserir placa"
        value={placa}
        onChangeText={setPlaca}
      />

      <Button
        title="Pesquisar"
        onPress={() => {
          navigation.navigate('Page2', {placa});
        }}
      />
    </View>
  );
};

export default Home;
