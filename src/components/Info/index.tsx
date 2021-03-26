import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

interface IInfoProps {
  title: string;
  value: string;
}

const Info: React.FC<IInfoProps> = ({title, value}: IInfoProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);
export default Info;
