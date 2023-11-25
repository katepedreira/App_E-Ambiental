import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreenView from '../../view/WelcomeScreenView/WelcomoeScreenView';



const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreenView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
