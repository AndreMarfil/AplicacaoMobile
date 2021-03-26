import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text} from 'react-native';

const Page2: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Button
        title="Voltar"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Text> PAGINA 2</Text>
    </>
  );
};

export default Page2;
