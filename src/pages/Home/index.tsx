import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, TextInput, View} from 'react-native';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput placeholder="teste" />
      <Button
        title="button"
        onPress={() => {
          navigation.navigate('Page2');
        }}
      />
    </View>
  );
};

export default Home;
