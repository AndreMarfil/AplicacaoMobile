import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Procurar por placa:</Text>
      <TextInput placeholder="Inserir placa" />

      <Button
        title="Pesquisar"
        onPress={() => {
          navigation.navigate('Page2');
        }}
      />
    </View>
  );
};

export default Home;
