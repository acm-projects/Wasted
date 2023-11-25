import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';


const Profile = () => {
  return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>your profile</Text>
        <View style={styles.line}></View>
        <View style={styles.nameContainer}>
        <Text style={styles.name}>Hiba M. </Text>
        <Text style = {styles.username}> username (optional)</Text>
        </View>
        <View style={styles.postsclaimcontainer}>
        <View style={styles.posts}>
        <Text style={styles.number}>10</Text>
        <Text style={styles.postText}>posts</Text>
        </View>
        <View style={styles.claims}>
        <Text style={styles.number}>2</Text>
        <Text style={styles.postText}>claims</Text>
        </View>
        </View>
      <View style={styles.profileviewText}>
       <Image source={require('../../assets/stars.png')}/> 
        <Text style={{fontSize: 10}}> your profile can only be viewed by you </Text>
         <Image source={require('../../assets/stars.png')}/> 
        </View>
        <View style={styles.emailView}>
        <Text style={styles.emailpassText}>school email address:</Text>
        <Text>hxm220064@utdallas.edu</Text>
        </View>
        <View>
        <Text> </Text>
        </View>
        <View style={styles.emailView}>
        <Text style={styles.emailpassText}>password:</Text>
        <Text>********</Text>
        </View>
        <Image source={require('../../assets/wasted-logo.png')} style={styles.image}/> 
        </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5EB',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#2A2D34',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 4,
    fontSize: 50,
    lineHeight: 50,
    fontWeight: '500', // You can adjust this for vertical centering
    marginBottom: 25,
    marginTop: 40,
    justifyContent: 'flex-start'
  },
  line:{
    alignSelf: 'center',
    padding: .25,
    width: 350,
    backgroundColor: '#2A2D34',
    marginTop: 5,
    marginBottom: 30
  },
  nameContainer: {
    alignItems: 'center'
  },
  name:{
    marginTop: 10,
    color: '#2A2D34',
    fontWeight: 'bold',
    fontSize: 30,
  },
  username:{
    fontSize: 20,
    marginTop: 10
  },
  postsclaimcontainer:{
    margin: 40,
    flexDirection: 'row'
  },
  posts:{
    backgroundColor: '#66C3D0',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: 142,
    height: 142,
    alignItems: 'center',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 1, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 2,
    marginRight: 15
  },
  claims:{
    backgroundColor: '#66C3D0',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: 142,
    height: 142,
    alignItems: 'center',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 1, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 2,
    marginLeft: 15
  },
  profileviewText:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  emailView:{
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    marginLeft: 30,
    alignItems: 'flex-start'
  },
  emailpassText:{
    fontWeight: 'bold',
    marginBottom: 7,
    fontSize: 20
  },
  number:{
    fontSize:60,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
    color: 'white'
  },
  postText:{
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  image:{
    height: 127,
    width: 170,
    alignSelf: 'flex-end'
  }
});

