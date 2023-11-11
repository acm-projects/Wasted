import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigation.navigate('Hometab'); // Navigate to the Home screen
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
     <Text style={styles.title}>log in</Text>
     <View style={styles.line}></View>
     <Image source={require('../../assets/treasure2.png')} style ={styles.logo}/>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>email</Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <Text style={styles.text}>password</Text>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>let's go!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5EB',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#2A2D34',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: 'Sen',
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 50, // You can adjust this for vertical centering
    marginBottom: 50,
  },
  inputContainer: {
    width: '80%',
  },
  text:{
    paddingTop: 11,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2A2D34'

  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    backgroundColor: 'rgba(203, 239, 226, 0.85)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  buttonOutline: {
    backgroundColor: 'black',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});
