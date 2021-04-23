import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {Alert, ScrollView} from 'react-native';
import Info from '../../components/Info';

import api from '../../services/api';

import styles from './styles';

interface Car {
  ano: string;
  anoModelo: string;
  chassi: string;
  codigoRetorno: string;
  codigoSituacao: string;
  cor: string;
  data: string;
  dataAtualizacaoAlarme: string;
  dataAtualizacaoCaracteristicasVeiculo: string;
  dataAtualizacaoRouboFurto: string;
  marca: string;
  mensagemRetorno: string;
  modelo: string;
  municipio: string;
  placa: string;
  situacao: string;
  uf: string;
}

interface RouteParams {
  placa: string;
}

const Page2: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {placa} = route.params as RouteParams;

  const [car, setCar] = useState<Car>({} as Car);

  const findCar = useCallback(async () => {
    const response = await api.get<Car>('', {params: {placa}});

    if (response.status === 400) {
      Alert.alert(
        'Desculpe',
        'Não encontramos a placa em nosso banco de dados',
        [{text: 'Go back', onPress: () => navigation.goBack()}],
      );
    }

    setCar(response.data);
  }, [placa, navigation]);

  useEffect(() => {
    findCar();
  }, [findCar]);

  return (
    <ScrollView style={styles.container}>
      <Info title="Modelo veículo:" value={car.modelo} />
      <Info title="Ano do veículo:" value={car.anoModelo} />
      <Info title="Cor veículo:" value={car.cor} />
      <Info title="Município do veículo:" value={car.municipio} />
      <Info title="UF do veículo:" value={car.uf} />
    </ScrollView>
  );
};

export default Page2;
