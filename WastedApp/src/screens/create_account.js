import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
        navigation.navigate('Home'); 
    }).catch((error)=>{
        console.log(error)
    })
  }

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.container}>
     <Text style={styles.title}>SIGN UP</Text>
     <View style={styles.line} />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First and Last Name</Text>
          <TextInput
            value={name}
            onChangeText={text => setname(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>School Email Address</Text>
          <TextInput
            value={email}
            onChangeText={text => setemail(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Create Password</Text>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Verify Password</Text>
          <TextInput
            value={verpassword}
            onChangeText={text => setverPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={usr}
            onChangeText={text => setusr(text)}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.line} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Let's Go!</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default create_account;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF5EB', // You can set the background color for SafeAreaView if needed
  },

  container: {
    flexGrow: 1, // This ensures that the container can grow to accommodate its children
    justifyContent: 'center', // Centers children vertically in the container
    alignItems: 'center', // Centers children horizontally in the container
    backgroundColor: '#FFF5EB80',
    paddingHorizontal: 20, // Horizontal padding
  },
  
  line: {
    alignSelf: 'stretch', // Ensure the line takes the full width
    height: 2,
    backgroundColor: '#D3D3D3',
    marginVertical: 10,
  },



  title: {
    marginTop: 20,
    color: '#2A2D34',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: 'Sen',
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 50,
    marginBottom: 30, // Adjust this spacing
  },
  formContainer: {
    width: '80%',
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
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 5,
    fontSize: 16,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
