import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Login from './pages/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {alignContent: 'center'},
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Pagina Principal'}}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{title: 'Informações'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
