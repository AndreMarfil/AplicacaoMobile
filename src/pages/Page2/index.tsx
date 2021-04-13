import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView} from 'react-native';
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

  const {placa} = route.params as RouteParams;

  const [car, setCar] = useState<Car>({} as Car);

  const findCar = useCallback(async () => {
    const response = await api.get<Car>('', {params: {placa}});

    setCar(response.data);
  }, [placa]);

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
