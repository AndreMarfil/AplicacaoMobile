import React from 'react';
import {ScrollView} from 'react-native';
import Info from '../../components/Info';

import styles from './styles';

const Page2: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Info title="Proprietário" value="André" />
      <Info title="Modelo veículo" value="sentra" />
      <Info title="Cor veículo" value="prata" />
      <Info title="Ano veículo" value="2021" />
      <Info title="Data de compra" value="13/05/2021" />
      <Info title="Data de compra" value="13/05/2021" />
      <Info title="Data de compra" value="13/05/2021" />
      <Info title="Data de compra" value="13/05/2021" />
      <Info title="Data de compra" value="13/05/2021" />
      <Info title="Data de compra" value="13/05/2021" />
      <Info title="Data de compra" value="13/05/2021" />
      <Info title="Data de compra" value="13/05/2021" />
      <Info title="Data de compra" value="13/05/2021" />
    </ScrollView>
  );
};

export default Page2;
