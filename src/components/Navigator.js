import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeView from '../view/HomeView/HomeView';
import LoginView from '../view/LoginView/LoginView';
import MenuView from '../view/MenuView/MenuView';
import TipoResiduoView from '../view/TipoResiduoView/TipoResiduoView';
import WelcomeScreenView from '../view/WelcomeScreenView/WelcomoeScreenView';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Menu" component={MenuView} />
        <Stack.Screen name="Welcome" component={WelcomeScreenView} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="TipoResiduo" component={TipoResiduoView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
