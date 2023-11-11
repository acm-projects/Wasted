import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
import post1 from '../../assets/chess_1.png';

// Add more items here
const posts = [
  {
    title: 'chess board',
    image: post1,
    category: 'misc.',
    location: 'UTD',
  },
  {
    title: 'title',
    image: post1,
    category: 'misc.',
    location: 'UTD',
  },
  {
    title: 'title',
    image: post1,
    category: 'misc.',
    location: 'UTD',
  },
  {
    title: 'title',
    image: post1,
    category: 'misc.',
    location: 'UTD',
  },
  {
    title: 'title',
    image: post1,
    category: 'misc.',
    location: 'UTD',
  },
  {
    title: 'title',
    image: post1,
    category: 'misc.',
    location: 'UTD',
  },
  {
    title: 'title',
    image: post1,
    category: 'misc.',
    location: 'UTD',
  },
  {
    title: 'title',
    image: post1,
    category: 'misc.',
    location: 'UTD',
  },
  {
    title: 'title',
    image: post1,
    category: 'misc.',
    location: 'UTD',
  },
];

const Homescreen = () => {
  const [showModal,setShowModal]=useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.welcome}>welcome back, Hiba!</Text>
        <View style={styles.line}></View>
        <Text style={styles.header}>posts</Text>
        {posts.map((post) => {
          return (
            <View style={styles.items}>
              <Text style={styles.title}>{post.title}</Text>
              <Image style={styles.image} source={post.image} />
              <View style={styles.info}>
                <Text style={{ fontWeight: 'bold' }}>location: </Text>
                <Text>{post.location}</Text>
              </View>
              <View style={styles.info}>
                <Text style={{ fontWeight: 'bold' }}>category: </Text>
                <Text>{post.category}</Text>
              </View>
              <TouchableOpacity style={styles.viewButton} onPress={()=>setShowModal(true)}>
                <Text style={styles.viewPostText}>view post</Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                visible={showModal}
                animationType="slide">
                <View style={styles.centerView}>
                  <Text style={styles.modalTitle}>{post.title}</Text>
                  <View style={styles.modalCategory}>
                  <Text style={styles.viewPostText}>{post.category}</Text>
                  </View>
                  <Image style={styles.modalImage} source={post.image} />
                  <View style={styles.modalLocation}>
                    <Text style={{ fontWeight: 'bold'}}>location: </Text>
                    <Text style={{ marginRight: 10}}>{post.location}</Text>
                    <TouchableOpacity>
                    <Image source={require('../../assets/location-pin.png')}/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalInfo}>
                    <Text style={{ fontWeight: 'bold' }}>description: </Text>
                    <Text>{post.description}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setShowModal(false)}>
                    <Text style={styles.viewPostText}>close post</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
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
    backgroundColor: '#66C3D0',
    marginTop: StatusBar.currentHeight || 0,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  items: {
    backgroundColor: '#FFF5EB',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-around',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 4,
    borderRadius: 20,
    height: 300,
    width: 274,
    alignSelf: 'center',
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 10,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    textShadowRadius: 3,
    textShadowOffset: 1,
    textShadowColor: 'black',
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    alignSelf: 'center',
    textShadowRadius: 3,
    textShadowOffset: 1,
    textShadowColor: 'black',
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 2,
  },
  image: {
    margin: 10,
    marginTop: 7,
    alignSelf: 'center',
    width: 194,
    height: 124,
    marginBottom: -5,
  },
  info: {
    flexDirection: 'row',
    paddingTop: 7,
    paddingLeft: 20,
    marginBottom: -9,
    textAlign: 'left',
    fontWeight: 'bold',
    alignSelf: 'left',
  },
  line: {
    alignSelf: 'center',
    padding: 0.25,
    width: 350,
    backgroundColor: '#2A2D34',
    marginTop: 10,
    marginBottom: 50,
  },
  viewButton: {
    backgroundColor: '#AD8676',
    alignSelf: 'flex-end',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: -2,
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
  },
  viewPostText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  centerView: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#FFF5EB',
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  closeButton: {
    backgroundColor: '#AD8676',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    padding: 5,
    paddingLeft: 20,
    marginRight: 20,
    marginTop: 90,
    paddingRight: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
  },
  modalTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    padding: 2,
    marginTop: 12,
  },
  modalCategory:{
    backgroundColor: '#66C3D0',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    padding: 5,
    paddingLeft: 10,
    marginLeft: 20,
    paddingRight: 10,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
  },
  modalImage:{
    margin: 5,
    marginTop: 7,
    alignSelf: 'center',
    width: 230,
    height: 170,
    marginBottom: -5,
  },
  modalLocation:{
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    justifyContentL: 'center'
  },
  modalInfo:{
    paddingTop: 7,
    paddingLeft: 20,
    marginBottom: -9,
    textAlign: 'left',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  }

});

export default Homescreen;

