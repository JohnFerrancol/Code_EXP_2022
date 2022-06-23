import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FitnessNavigator from './screens/FitnessNavigator';
import CalendarNavigator from './screens/CalendarNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Fitness Tracker"  options={{ headerShown: false }} component={FitnessNavigator} />
        <Stack.Screen name="Calendar"  options={{ headerShown: false }} component={CalendarNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


