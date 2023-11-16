import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import React from 'react';
import landingBackground from '../../assets/landing-background.png';

const landing_page = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
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
        
        <Text style={styles.buttonText}>log in          </Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>don't have an account?</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text></Text>
        <Text style={styles.buttonText}>sign up           </Text>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default landing_page;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundImage: `url(${landingBackground})`,
    backgroundRepeat: 'no-repeat',
    width: 430

  },
  container: {
    flex: 1,
    justifyContent: 'top'
  },
  title: {
    color: 'white',
    fontSize: 60,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    fontWeight: 400,
    paddingTop: 45,
    paddingLeft: 10
  },
  quote: {
    marginRight: 47,
    paddingTop: 5,
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'right',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.25)'
  },
  buttonView:{
    paddingTop: 50,
    width: 294,
    height: 45,
    alignSelf: 'center',
    fontStyle: 'bold',
    paddingBottom: 7,
    justifyContent: 'bottom',
    marginRight: 30
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: '#AD8676',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2A2D34',
    padding: 20,
    marginTop: 10,
    width: 294,
    height: 45,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  textContainer: {
    width: '80%',
    marginTop: 10,
    alignItems: 'flex-start', // Align text to the left
  },
  text: {
    fontSize: 16,
    color: '#2A2D34',
    paddingTop: 20
     // Add padding to the left
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 90,
    marginBottom: -50,
    width: 300,
    height: 300,
    marginRight: 35
  }
});