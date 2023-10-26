import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';

const Homescreen = () => {
  const data1x3 = Array.from({ length: 3 }, (_, index) => index + 1);
  const data6x6 = Array.from({ length: 36 }, (_, index) => index + 1);
  const additionalItems = Array.from({ length: 10 }, (_, index) => `A${index + 1}`); // Add more items here

  const renderItem = () => (
    <View style={styles.item} />
  );

  return (
    <ScrollView style={styles.container}>
      {/* Popular Items Header */}
      <Text style={styles.header}>Recently Viewed Items:</Text>

      {/**FIX ME */}
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Camera')}
      > 
        <Text>Click To View Camera</Text>
      </TouchableOpacity>
  {/**FIX ME */}

      {/* 1x3 Grid for Popular Items */}
      <View style={styles.grid1x3}>
        {data1x3.map((index) => (
          <View key={index} style={styles.item1x3} />
        ))}
      </View>

      {/* Additional Items Header */}
      <Text style={styles.header}>Additional Items</Text>

      {/* Scrollable 1xN Grid for Additional Items */}
      <ScrollView horizontal>
        <View style={styles.grid1xN}>
          {additionalItems.map((item, index) => (
            <View key={index} style={styles.item1xN} />
          ))}
        </View>
      </ScrollView>

      {/* Items available Header */}
      <Text style={styles.header}>Items available</Text>

      {/* 6x6 Grid for Items on Sale */}
      <View style={styles.grid6x6}>
        {data6x6.map((index) => (
          <View key={index} style={styles.item6x6} />
        ))}
      </View>
    </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EB80',
    height: '100%',
    width: '100%',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  grid1x3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  item1x3: {
    flex: 1,
    backgroundColor: 'rgba(203, 239, 226, 0.85)',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 350, // Adjusted height
  },
  grid1xN: {
    flexDirection: 'row',
  },
  item1xN: {
    flex: 1,
    backgroundColor: 'rgba(203, 239, 226, 0.85)',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 350, // Adjusted height
    width: 200, // Adjusted width
  },
  grid6x6: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    padding: 10,
    justifyContent: 'space-between', // Added to fill the width
  },
  item6x6: {
    flexBasis: '30%', // Adjusted flex basis
    backgroundColor: 'rgba(203, 239, 226, 0.85)',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 160, // Adjusted height
  },
  picture: {
    fontSize: 15,
    marginTop: 30,
  },
});

export default Homescreen;
