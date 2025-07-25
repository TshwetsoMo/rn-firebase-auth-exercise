import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './services/MainNavigator';
import { AuthProvider } from './services/authContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;


// function createNativeStackNavigator() {
//   throw new Error('Function not implemented.');
// }
//1. Setup the nav for when a user is logged out
//2. Setup the nav for when a user is logged in
//3. Setup the nav for when a user is registering