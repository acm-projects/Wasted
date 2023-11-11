import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

// Add more items here
  const DATA = [
    {
      title: "Title",
      main: {
        temp_location: "UTD",
        temp_category: "food"
      },
      image: "temp image"
    },
    {
      title: "Title",
      main: {
      temp_location: "UTD",
      temp_category: "jewelry"
      },
      image: "temp image"
    },
    {
      title: "Title",
      main: {
      temp_location: "UTD",
      temp_category: "furniture "
      },
    image: "temp image"
    }
  ]
  const Item = (props) => {
    const {title, temp_location, temp_category, image} = props
    return(
      <View style={styles.item}>
      
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.image}>{image}</Text>

      <View style={styles.infoView}>
        <View style={styles.info}>
          <Text style={{fontWeight: 'bold'}}>location: </Text>
          <Text>{temp_location}</Text>
        </View>

        <View style={styles.info}>
          <Text style={{fontWeight: 'bold'}}>description: </Text>
          <Text>{temp_category}</Text>
        </View>
        </View>


      </View>

    )
  }
  const Homescreen = () => {
    const renderItem = ({item}) => (
      <Item title={item.title} temp_location={item.main.temp_location} temp_category={item.main.temp_category} image={item.image}/>
    )
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>welcome back, Hiba!</Text>
      
      <Text style={styles.header}>current items:</Text>

      <FlatList 
      data={DATA} 
      renderItem={renderItem}
      keyExtractor={item=>item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EB',
    marginTop: StatusBar.currentHeight||0,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  item:{
    backgroundColor: '#CBEFE2',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'left',
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
    fontSize: 25,
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
  infoView:{
    backgroundColor: 'white',
    width: 298,
    paddingLeft: 5,
    marginHorizontal: -10,
    marginVertical: -30,
    borderRadius: 10
  }
  
});

export default Homescreen;
