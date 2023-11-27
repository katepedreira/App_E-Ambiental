import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import CadastroView from '../view/CadastroView/CadastroView';
import LoginView from '../view/LoginView/LoginView';
import WelcomeScreenView from '../view/WelcomeScreenView/WelcomoeScreenView';



const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreenView} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Cadastro" component={CadastroView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
