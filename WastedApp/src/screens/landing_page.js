import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import React from 'react';
//import wastedlogo from './assets/wasted-logo.png';

const landing_page = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
        <Text style={styles.title}>w a s t e d.</Text>
        <Text style={styles.quote}>
          {' '}
          "one man's trash is another man's treasure"
        </Text>
        <Image source={require('../../assets/wasted-logo.png')} style ={styles.logo}/>
      <View style={styles.buttonView}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>log in</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>don't have an account?</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>sign up</Text>
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
    backgroundColor: '#FFF5EB',
  },
  container: {
    flex: 1,
    justifyContent: 'top',
  },
  title: {
    color: '#2A2D34',
    fontSize: 60,
    textShadowRadius: 1.75,
    textShadowColor: '#2A2D34',
    fontFamily: 'Sen',
    fontStyle: 'bold',
    paddingTop: 45,
    paddingLeft: 10
  },
  quote: {
    paddingRight: 10,
    paddingTop: 5,
    color: '#2A2D34',
    fontSize: 20,
    fontFamily: 'Sen',
    fontStyle: 'italic',
    textAlign: 'right',
  },
  buttonView:{
    paddingTop: 50,
    width: 294,
    height: 45,
    alignSelf: 'center',
    fontStyle: 'bold',
    paddingBottom: 7,
    justifyContent: 'bottom'
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: 'rgba(203, 239, 226, 0.85)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
    marginTop: 10,
    width: 294,
    height: 45,
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
    paddingTop: 20
     // Add padding to the left
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 350,
    height: 350
  }
});
