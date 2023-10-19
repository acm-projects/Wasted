import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const landing_page = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>W A S T E D</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Don't have an account?</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default landing_page;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5EB80',
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
  buttonContainer: {
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
  textContainer: {
    width: '80%',
    marginTop: 10,
    alignItems: 'flex-start', // Align text to the left
  },
  text: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 10, // Add padding to the left
  },
});
