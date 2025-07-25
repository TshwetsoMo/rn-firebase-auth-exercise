// Renders the login form.
// • Collects email/password via controlled TextInputs.
// • Calls loginUser() on button press.
// • Demonstrates simple navigation to Register screen.

import React, { useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../services/authService';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    /**
   * handleLogin
   * Wraps loginUser in try/catch so we can
   * show alerts or errors down the line.
   */
  const handleLogin = async () => {
    try {
      await loginUser(email, password);
    } catch {
      // Optionally show error to user
    }
  };

  return (/* SafeAreaView ensures we don’t overlap status bar / notch on iOS devices */
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Your Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Your Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />{/* Primary action */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {/* Secondary nav to Register */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'white' },
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 30, marginBottom: 20 },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    paddingHorizontal: 10
  },
  button: { backgroundColor: 'black', padding: 10, marginTop: 30 },
  buttonText: { textAlign: 'center', color: 'white' },
  linkText: { marginTop: 20, textAlign: 'center', color: 'blue' }
});