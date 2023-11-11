// Import the required components
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import landing_page from './src/screens/landing_page';
import LoginScreen from './src/screens/login';
import create_account from './src/screens/create_account';
import Homescreen from './src/screens/Homescreen'; // Correct the import name
import tabs from './navigation/tabs';
import phonecamera from './src/screens/Camera';
import create_posts from './src/screens/create_posts';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={landing_page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ headerTitle: '' }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerTitle: '' }}
          name="Signup"
          component={create_account}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Hometab"
          component={tabs} // Make sure the import name matches
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Create-posts"
          component={create_posts} // Make sure the import name matches
        />
        <Stack.Screen
          options={{ headerTitle: '' }}
          name="Camera"
          component={phonecamera} // Make sure the import name matches
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
