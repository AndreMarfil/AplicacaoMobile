import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Page2 from './pages/Page2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Pagina Principal'}}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{title: 'Segunda Tela'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
