import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Image } from 'react-native';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const create_posts = () => {
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
        <Text style={styles.headerText}>Create Post</Text>
      </View>

      <View style={styles.line} />

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../../assets/Camera.png')}
            resizeMode='contain'
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.locationInputContainer}>
          <TextInput
            style={styles.locationInput}
            placeholder="Your  location"
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
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Description"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />

        <View style={styles.line} />
       <View>
       <Text style={styles.categoryText}>Categories</Text>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity onPress={() => setCategory('food')}>
          <Text style={category === 'food' ? styles.categorySelected : styles.category}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('furniture')}>
          <Text style={category === 'furniture' ? styles.categorySelected : styles.category}>Furniture</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('misc')}>
          <Text style={category === 'misc' ? styles.categorySelected : styles.category}>Misc.</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.switchContainer}>
        <Text>Perishable</Text>
        <Switch
          value={isPerishable}
          onValueChange={setIsPerishable}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text>Allow Comments</Text>
        <Switch
          value={allowComments}
          onValueChange={setAllowComments}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Post!</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default create_posts

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
    paddingVertical: 35, // Use vertical padding for spacing at the top and bottom
    backgroundColor: '#FFF5EB',
    alignItems: 'stretch', // Ensures that children stretch to match the width of the container
  },

  line: {
    height: 2, // Thickness of the line
    backgroundColor: '#D3D3D3', // Color of the line
    marginVertical: 20, // Spacing above and below the line
  },

    header: {
      // If you need the header to be touchable, replace 'View' with 'TouchableOpacity'
      alignItems: 'center', // Center the text horizontally
      padding: 20, // Add padding to increase the touchable area if it's a TouchableOpacity
    },
    headerText: {
      fontSize: 24, // Adjust the size as needed
      fontWeight: 'bold', // If the header is bold in your design
      color: '#000000', // Adjust the color as needed
      // Add additional styling to match your Figma design
    },

    category: {
      alignSelf: 'center', // This centers the view horizontally within its parent
      marginVertical: 20, 
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
      backgroundColor: '#CBEFE2', // The background color of the button
      borderRadius: 10, // Rounded corners of the button
    },
    locationInputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      backgroundColor: '#CBEFE2', // Background color of the location input
      borderRadius: 10,
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
      backgroundColor: '#CBEFE2',
      marginBottom: 20,
      borderRadius: 10, // increased border radius for a more rounded look
      backgroundColor: '#CBEFE2'
    },
    description: {
      backgroundColor: '#CBEFE2',
      height: 120, // make the description input taller
      textAlignVertical: 'top', // align text to the top for multiline input
    },
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
      marginTop: 10,
    },
    category: {
      backgroundColor: '#CBEFE2', // Background color for the bubble
      borderRadius: 18, // Adjust the border-radius to get the desired "bubble" effect
      paddingVertical: 10, // Vertical padding
      paddingHorizontal: 20, // Horizontal padding
      marginHorizontal: 5, // Space between the bubbles
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center', // Center text vertically
      borderRadius: 20,

    },
    categorySelected: {
      backgroundColor: '#00A4CC', // Different background color for selected category
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF', // White text color for selected category
    },

    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      paddingVertical: 12, // give some vertical padding to the switch container
    },
    button: {
      backgroundColor: '#00A4CC', // a pleasant shade of teal for the button
      padding: 15,
      height: 65,
      borderRadius: 10, // more rounded corners for the button
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16, // assuming you want a slightly larger font for the button text
    },  
})