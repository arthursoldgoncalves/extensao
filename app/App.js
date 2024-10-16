import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './loginPage';  // Caminho para a tela de login
//import SignUpScreen from './registroPage';  // Caminho para a tela de registro
//import DashboardScreen from './dashboardPage';  // Caminho para a tela de dashboard

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginPage"> {/* Definindo LoginScreen como inicial */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
