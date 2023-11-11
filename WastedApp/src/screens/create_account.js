import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const create_account = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [verpassword, setverPassword] = useState('');
  const [usr, setusr] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        firebase.firestore().collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({auth, email, password})
        navigation.navigate('Home'); 
    }).catch((error)=>{
        console.log(error)
    })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
     <Text style={styles.title}>sign up</Text>
     <View style={styles.line}></View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>first and last name</Text>
          <TextInput
            value={name}
            onChangeText={text => setname(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>school email address</Text>
          <TextInput
            value={email}
            onChangeText={text => setemail(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>create password</Text>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>verify password</Text>
          <TextInput
            value={verpassword}
            onChangeText={text => setverPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>username</Text>
          <TextInput
            value={usr}
            onChangeText={text => setusr(text)}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>let's go!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default create_account;

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
    fontSize: 50,
    lineHeight: 50,
    fontWeight: '400', // You can adjust this for vertical centering
    marginBottom: 25,
    marginTop: 40
  },
  formContainer: {
    width: '80%',
    height: '-20%'
  },
  inputContainer: {
    marginBottom: 20, // Add spacing between input fields
    
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2A2D34',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 5,
    fontSize: 16,
  },
  buttonContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 70
  },
  button: {
    backgroundColor: '#E5B9AC',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  line:{
    alignSelf: 'top',
    padding: .25, 
    width: 400,
    backgroundColor: '#2A2D34',
    marginTop: 5,
    marginBottom: 30

  }
});