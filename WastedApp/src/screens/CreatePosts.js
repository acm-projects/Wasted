import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Image } from 'react-native';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';


const CreatePosts = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [location, setlocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('misc');
  const [isPerishable, setIsPerishable] = useState(false);
  const [allowComments, setAllowComments] = useState(true);

  const handleSubmit = () => {
    try {
      const docRef = addDoc(collection(db, 'posts'), {
        title: title,
        location: location,
        description: description,
        category: category,
        isPerishable: isPerishable,
        allowComments: allowComments
      });
      console.log('Document written with ID: ', docRef.id);
      // Handle post-submit logic, such as navigation or clearing the form
    } catch (e) {
      console.error('Error adding document: ', e);
      // Handle the error, such as displaying a message to the user
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Text style={styles.headerText}>create post</Text>
      </View>

      <View style={styles.line} />

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Camera')}>
          <Image
            source={require('../../assets/Camera.png')}
            resizeMode='contain'
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.locationInputContainer}>
          <TextInput
            style={styles.locationInput}
            placeholder="your location"
            value={location} // Change this to your state variable for location if it's different
            onChangeText={setlocation} // Change this to the correct handler for location if it's different
          />
          <Image
            source={require('../../assets/Location.png')}
            resizeMode='contain'
            style={styles.locationIcon}
          />
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.description]}
        placeholder="description"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />

        <View style={styles.line} />
       <View>
       <Text style={styles.categoryText}>categories</Text>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity onPress={() => setCategory('food')}>
          <View style={category === 'food' ? styles.categorySelected : styles.category}>
            <Text>food</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('furniture')}>
          <View style={category === 'furniture' ? styles.categorySelected : styles.category}>
          <Text>furniture</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('misc')}>
          <View style={category === 'misc' ? styles.categorySelected : styles.category}>
            <Text>misc.</Text>
            </View>
        </TouchableOpacity>
      </View>

      <View style={styles.switchContainer}>
        <Text>perishable</Text>
        <Switch
          value={isPerishable}
          onValueChange={setIsPerishable}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text>allow comments</Text>
        <Switch
          value={allowComments}
          onValueChange={setAllowComments}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>post!</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default CreatePosts;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF5EB', // You can set the background color for SafeAreaView if needed
  },

  categoryText: {
    fontSize: 15, // Adjust the size as needed
    fontWeight: 'bold', // If the category header is bold in your design
    textAlign: 'center', // Center the text inside the Text component
    color: '#000000', // Adjust the color as needed
  },

  container: {
    paddingHorizontal: 20, // Use horizontal padding only to allow width for children
    paddingVertical: 15, // Use vertical padding for spacing at the top and bottom
    backgroundColor: '#FFF5EB',
    alignItems: 'stretch', // Ensures that children stretch to match the width of the container
  },

  line: {
    padding: .25, 
    width: 310,
    backgroundColor: '#2A2D34',
    marginVertical: 10, // Spacing above and below the line
    marginBottom: 15
  },

    header: {


    },
    headerText: {
        color: '#2A2D34',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 2, height: 4 },
        textShadowRadius: 4,
        fontSize: 40,
        lineHeight: 50,
        fontWeight: '500', // You can adjust this for vertical centering
        marginBottom: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    category: {
      alignSelf: 'center', // This centers the view horizontally within its parent
      margin: 10
    },

    iconsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },

    iconButton: {
      width: 100,  // The total width of the button including padding
      height: 100, // The total height of the button including padding
      justifyContent: 'center', // Center the icon horizontally
      alignItems: 'center', // Center the icon vertically
      backgroundColor: 'white', // The background color of the button
      borderWidth: 1,
      borderColor: '#D0D0D0',
      borderRadius: 10, // Rounded corners of the button
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 1, height: 2 }, // Shadow direction and distance
      shadowOpacity: 0.2, // Shadow opacity
      shadowRadius: 1,
    },
    locationInputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      backgroundColor: 'white', // Background color of the location input
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#D0D0D0',
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 1, height: 2 }, // Shadow direction and distance
      shadowOpacity: 0.2, // Shadow opacity
      shadowRadius: 1
    },
    locationInput: {
      flex: 1,
      paddingHorizontal: 10, // Horizontal padding inside the input
      paddingVertical: 10, // Vertical padding inside the input
      
    },
    locationIcon: {
      position: 'absolute',
      right: 10,
      height: 20, // Size of the icon image
      width: 20, // Size of the icon image
    },  

    icon: {
      width: 30, // Adjust the size if necessary
      height: 30, // Adjust the size if necessary
    },
    
    input: {
      borderWidth: 1,
      borderColor: '#D0D0D0', // a light gray border color
      padding: 10,
      backgroundColor: 'white',
      marginBottom: 20,
      borderRadius: 10,// increased border radius for a more rounded look,
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 1, height: 2 }, // Shadow direction and distance
      shadowOpacity: 0.2, // Shadow opacity
      shadowRadius: 1,
    },
    description: {
      backgroundColor: 'white',
      height: 100, // make the description input taller
      textAlignVertical: 'top', // align text to the top for multiline input
    },
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
      marginTop: 10
    },
    category: {
      borderRadius: 20,
      backgroundColor: 'white', // Background color for the bubble
      paddingVertical: 5, // Vertical padding
      paddingHorizontal: 20, // Horizontal padding
      marginHorizontal: 5, // Space between the bubbles
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center', // Center text vertically
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 1, height: 2 }, // Shadow direction and distance
      shadowOpacity: 0.2, // Shadow opacity
      shadowRadius: 1,
      borderWidth: .5,
      borderColor: 'black'

    },
    categorySelected: {
        borderRadius: 20,
      backgroundColor: '#66C3D0', // Different background color for selected category
      paddingVertical: 5, // Vertical padding
      paddingHorizontal: 20, // Horizontal padding
      marginHorizontal: 5, // Space between the bubbles
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center', // Center text vertically
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 1, height: 2 }, // Shadow direction and distance
      shadowOpacity: 0.2, // Shadow opacity
      shadowRadius: 1,
      borderWidth: .5,
      borderColor: 'black'
      
    },

    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 1,
      paddingVertical: 12, // give some vertical padding to the switch container
    },
    button: {
      backgroundColor: '#66C3D0', // a pleasant shade of teal for the button
      padding: 15,
      height: 65,
      borderRadius: 10, // more rounded corners for the button
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:50,
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
      shadowOpacity: 0.3, // Shadow opacity
      shadowRadius: 3,
      borderWidth: 1,
      borderColor: 'black'
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16, // assuming you want a slightly larger font for the button text
    },  
})