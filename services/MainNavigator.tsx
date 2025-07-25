/* MainNavigator.tsx */
// Chooses which stack to show based on `user`:
// • If user exists, show ProfileScreen.
// • Otherwise, show Login & Register screens.
// Demonstrates dynamic navigation flows.
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useAuth } from './authContext';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (  // User is signed in → entry point to app
        <Stack.Screen name="Profile" component={ProfileScreen} />
      ) : (
        <>
            {/* User is not signed in → show auth screens */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegistrationScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;