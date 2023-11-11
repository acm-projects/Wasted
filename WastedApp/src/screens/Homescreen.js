import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

// Add more items here
const posts = [
  {
    title: "Title",
    image: "temp image",
    location: "myLocation",
    description: "tempDescription"
  },
  {
    title: "Title",
    image: "temp image",
    location: "myLocation",
    description: "tempDescription"
  },
  {
    title: "Title",
    image: "temp image",
    location: "myLocation",
    description: "tempDescription"
  },
  {
    title: "Title",
    image: "temp image",
    location: "myLocation",
    description: "tempDescription"
  },
  {
    title: "Title",
    image: "temp image",
    location: "myLocation",
    description: "tempDescription"
  },
  {
    title: "Title",
    image: "temp image",
    location: "myLocation",
    description: "tempDescription"
  },
  {
    title: "Title",
    image: "temp image",
    location: "myLocation",
    description: "tempDescription"
  },
  {
    title: "Title",
    image: "temp image",
    location: "myLocation",
    description: "tempDescription"
  },
  {
    title: "Title",
    image: "temp image",
    location: "myLocation",
    description: "tempDescription"
  }
]

const Homescreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.welcome}>welcome back, Hiba!</Text>
      <Text style={styles.header}>current items:</Text>
      {posts.map((post) => {
        return (
          <View style={styles.items}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.image}>{post.image}</Text>
            <View style={styles.info}>
            <Text style={{fontWeight: 'bold'}}>location: </Text>
            <Text>{post.location}</Text>
            </View>
            <View style={styles.info}>
            <Text style={{fontWeight: 'bold'}}>description: </Text>
            <Text>{post.description}</Text>
            </View>
          </View>
        );
      })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#FFF5EB',
    marginTop: StatusBar.currentHeight||0,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  items:{
    backgroundColor: '#CBEFE2',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-around',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 4,
    borderRadius: 10,
    height: 300,
    width: 300,
    alignSelf: 'center'
  },
  welcome:{
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 10,
    alignSelf: 'center',
    textAlign: 'center'
  },
  header:{
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 20,
  padding: 10
  },
  title:{
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 5,
  },
  image:{
    padding: 50,
    alignSelf: 'center'
  },
  info:{
    flexDirection: 'row',
    padding: 10,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  infoText:{
    backgroundColor: 'white',
    width: 298,
    paddingLeft: 5,
    marginHorizontal: -10,
    marginVertical: -30,
    borderRadius: 10
  }
});

export default Homescreen;
