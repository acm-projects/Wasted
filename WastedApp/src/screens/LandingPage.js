import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ImageBackground} from 'react-native';
import React from 'react';
//import landingBackground from '../../assets/landing-background.png';

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground
        source={require('../../assets/landing-background.png')}
        style={styles.container}>
        <Text style={styles.title}>w a s t e d.</Text>
        <Text style={styles.quote}>
          {' '}
          "one man's trash is another man's treasure"
        </Text>
        <Image source={require('../../assets/treasure1.png')} style ={styles.logo}/>
      <View style={styles.buttonView}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>log in</Text>
      </TouchableOpacity>
        <Text style={styles.text}>don't have an account?</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>sign up</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: 395,
    paddingLeft: 10,
    paddingBottom: 160
  },
  title: {
    color: 'white',
    fontSize: 60,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    fontWeight: 400,
    paddingTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
    justifyContent: 'flex-start'
  },
  quote: {
    marginRight: 8,
    paddingTop: 5,
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'right',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    marginBottom: 10
  },
  buttonView:{
    paddingTop: 50,
    width: 294,
    height: 45,
    alignSelf: 'center',
    fontStyle: 'bold',
    paddingBottom: 15
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: '#AD8676',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2A2D34',
    padding: 14,
    paddingBottom: 13,
    marginTop: 10,
    width: 280,
    height: 50,
    alignItems: 'center',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
  },
 buttonText: {
    fontSize: 18,
    color: 'white'
  },
  text: {
    fontSize: 14,
    color: '#2A2D34',
    paddingTop: 25,
    paddingBottom: 15
     // Add padding to the left
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: -40,
    width: 300,
    height: 300,
    marginRight: 35
  }
});