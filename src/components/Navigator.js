import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreenView from '../view/WelcomeScreenView/WelcomoeScreenView';
import LoginView from '../view/LoginView/LoginView';
import TipoResiduoView from '../view/TipoResiduoView/TipoResiduoView';
import MenuView from '../view/MenuView/MenuView';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Menu" component={MenuView} />
        <Stack.Screen name="Welcome" component={WelcomeScreenView} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="TipoResiduo" component={TipoResiduoView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
