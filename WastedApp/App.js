// Import the required components
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login';
import SignUp from './src/screens/SignUp';
import Homescreen from './src/screens/Homescreen'; // Correct the import name
import Tabs from './navigation/tabs';
import LandingPage from './src/screens/LandingPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          options={{ headerTitle: '' , headerTransparent: true}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerTitle: ''  , headerTransparent: true}}
          name="Signup"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Hometab"
          component={Tabs} // Make sure the import name matches
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}