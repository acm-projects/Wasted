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
  Modal,
} from 'react-native';
import post1 from '../../assets/posts/post1.png';
import post2 from '../../assets/posts/post2_.png';
import post3 from '../../assets/posts/post3.png';
import post4 from '../../assets/posts/post4.png';
import post5 from '../../assets/posts/post5.png';
import post6 from '../../assets/posts/post6.png';
import post7 from '../../assets/posts/post7.png';
import post8 from '../../assets/posts/post8.png';
import { useNavigation } from '@react-navigation/native';
// Add more items here
const posts = [
  {
    title: 'chess board',
    image: post1,
    category: 'misc.',
    location: 'UTD',
    description: 'antique chess board with all pieces included. in very good condition',
  },
  {
    title: 'jewelry holder',
    image: post2,
    category: 'misc.',
    location: 'UTD',
    description: 'pink jewlery holder with flowers. no chips or cracks. minor scratches are somewhat visible.',
  },
  {
    title: 'UTD cupcakes',
    image: post3,
    category: 'food',
    location: 'UTD',
    description: 'we baked too many cupcakes come grab some!! nut-allergy friendly cupcakes :)',
  },
  {
    title: 'plushies',
    image: post4,
    category: 'misc.',
    location: 'UTD',
    description: 'cute little plushies that we are trying to give away!!',
  },
  {
    title: 'rubix cube',
    image: post5,
    category: 'misc.',
    location: 'UTD',
    description: 'new rubix cube',
  },
  {
    title: 'vintage box',
    image: post6,
    category: 'misc.',
    location: 'UTD',
    description: 'antique chess board with all pieces included. in very good condition',
  },
  {
    title: 'round table',
    image: post7,
    category: 'furniture',
    location: 'UTD',
    description: 'antique chess board with all pieces included. in very good condition',
  },
  {
    title: 'fuzzy dice',
    image: post8,
    category: 'misc.',
    location: 'UTD',
    description: 'antique chess board with all pieces included. in very good condition.antique chess board with all pieces included. in very good conditionantique chess board with all pieces included. in very good conditionantique chess board with all pieces included. in very good conditionantique chess board with all pieces included. in very good condition',
  }
];
const Homescreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPost, setCurrentPost] = useState(false);
  const [claim, setClaim] = useState('claim');
  const openModal = (post) => {
    setCurrentPost(post); // Set the current post's information
    setShowModal(true);
  };
  const claimPost = (currentPost)=>{
    setClaim({text: 'Claimed!'})
  };
  const navigation = useNavigation();
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.welcome}>Welcome back, Hiba!</Text>
        <View style={styles.line}></View>
        <Text style={styles.header}>posts</Text>
        {posts.map((post) => {
          return (
            <View style={styles.items} key={post.title}>
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
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => openModal(post)}>
                <Text style={styles.viewPostText}>view post</Text>
              </TouchableOpacity>
              </View>
              );
        })}
             {currentPost && (
               <Modal
                transparent={true}
                visible={showModal}
                animationType="slide">
                <View style={styles.centerView}>
                  <Text style={styles.modalTitle}>{currentPost.title}</Text>
                  <View style={styles.modalCategory}>
                  <Text style={styles.viewPostText}>{currentPost.category}</Text>
                  </View>
                  <Image style={styles.modalImage} source={currentPost.image} />
                  <TouchableOpacity onPress={() => setClaim('claimed!')}>
                  <View style={claim === 'claimed!' ? styles.claimed : styles.notClaimed}>
                  <Text style={styles.claimtext}>{claim}</Text>
                    </View>
                </TouchableOpacity>
                
                  <View style={styles.modalLocation}>
                    <Text style={{ fontWeight: 'bold'}}>location: </Text>
                    <Text style={{ marginRight: 10}}>{currentPost.location}</Text>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate('Maps');
                      setShowModal(false);
                    }}>
                    <Image source={require('../../assets/location-pin.png')}/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalInfo}>
                    <Text style={{ fontWeight: 'bold' }}>description: </Text>
                    <Text>{currentPost.description}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setShowModal(false)}>
                    <Text style={styles.viewPostText}>close post</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
        )}
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
    paddingBottom: 100
  },
  items: {
    backgroundColor: '#FFF5EB',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-around',
    borderWidth: 1,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
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
    textShadowColor: 'black',
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    textShadowRadius: 3,
    textShadowColor: 'black'
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
    width: 223,
    height: 130,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
  },
  info: {
    flexDirection: 'row',
    paddingTop: 7,
    paddingLeft: 20,
    marginBottom: -5,
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
    marginBottom: 15,
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
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 1, height: 3 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 1,
  },
  viewPostText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFF5EB',
    marginTop: 150,
    marginBottom: 150,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4}, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 2,
  },
  closeButton: {
    backgroundColor: '#AD8676',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    padding: 5,
    paddingLeft: 20,
    marginRight: 15,
    marginTop: 30,
    paddingRight: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 1, height: 3 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 1,
  },
  modalTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    padding: 2,
    marginTop: 20,
    marginBottom: 20
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
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 1, height: 3 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 1,
  },
  modalImage:{
    margin: 5,
    marginTop: 7,
    marginLeft: 20,
    marginRight:20,
    alignSelf: 'center',
    width: 309,
    height: 198,
    marginBottom: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 1, height: 3 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 1,
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
    paddingRight: 20,
    marginBottom: -9,
    textAlign: 'left',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  notClaimed:{
    backgroundColor: '#66C3D0',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 1, height: 3 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 1,
    marginRight: -150,
    marginTop: -20
  },
  claimed:{
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 1, height: 3 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 1,
    marginRight: -150,
    marginTop: -20
  },
  claimtext:{
    alignSelf: 'center',
    paddingLeft: -50,
  
  }
});
export default Homescreen;