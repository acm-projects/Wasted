import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const LoginScreen = () => {
  const [email, setEmail] = useState('hxm220064@utdallas.edu');
  const [password, setPassword] = useState('Hibaisawesome');
  const navigation = useNavigation();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        //navigation.navigate('Home'); // Navigate to the Home screen
        navigation.navigate('Hometab'); 
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
      

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>let's go!</Text>
        </TouchableOpacity>
      </View>
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
  titleView:{
  justifyContent:'flex-start'
  },
  title: {
    color: '#2A2D34',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontSize: 50,
    fontWeight: '400',
    lineHeight: 50, // You can adjust this for vertical centering
    marginBottom: 25,
    alignSelf: 'center',
    
  },
  inputContainer: {
    width: '80%',
    backgroundColor: '#66C3D0',
    padding: 30,
    borderRadius: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2A2D34',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4

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
    paddingHorizontal: 9,
    paddingVertical: 11,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40
  },
  button: {
    backgroundColor: '#AD8676',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
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
    color: 'white',
  },
  buttonOutlineText: {
    color: '#AD8676',
    fontWeight: '700',
    fontSize: 16,
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 170,
    height: 170,
    marginBottom: 15
  },
  line:{
    alignSelf: 'center',
    padding: .25, 
    width: 350,
    backgroundColor: '#2A2D34',
    marginTop: 10,
    marginBottom: 30

  }
});