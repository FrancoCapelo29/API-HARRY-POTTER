import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import HousesScreen from './src/screens/HousesScreen';
import StudentsScreen from './src/screens/StudentsScreen';
import StudentDetailScreen from './src/screens/StudentDetailScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1A1A1A',
    text: '#FFFFFF',
    primary: '#FFD700',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Houses" component={HousesScreen} options={{ title: 'Casas de Hogwarts' }} />
        <Stack.Screen name="Students" component={StudentsScreen} options={{ title: 'Estudiantes' }} />
        <Stack.Screen name="StudentDetail" component={StudentDetailScreen} options={{ title: 'Detalles del Estudiante' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
