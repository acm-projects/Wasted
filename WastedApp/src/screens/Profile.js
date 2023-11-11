import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>your profile</Text>
        <View style={styles.line}></View>
        <View style={styles.nameContainer}>
        <Text style={styles.name}>first and last name </Text>
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
      <Image source={require('./assets/stars.png')}/>
        <Text style={{fontSize: 10}}> your profile can only be viewed by you </Text>
        <Image source={require('./assets/stars.png')}/>
        </View>
        <View style={styles.emailView}>
        <Text style={styles.emailpassText}>school email address:</Text>
        <Text>abc123456@school.edu</Text>
        </View>
        <View style={styles.emailView}>
        <Text style={styles.emailpassText}>password:</Text>
        <Text>myPass</Text>
        </View>
    
        </SafeAreaView>
      );
    }
    export default Profile;
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#FFF5EB',
        flex: 1,
        alignItems: 'center',
      },
      title: {
        color: '#2A2D34',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
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
        backgroundColor: '#E5B9AC',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        width: 142,
        height: 142,
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        marginRight: 15
      },
      claims:{
        backgroundColor: '#CBEFE2',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        width: 142,
        height: 142,
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        marginLeft: 15
      },
      profileviewText:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
      },
      emailView:{
        margin: 20,
        alignSelf: 'left',
        marginLeft: 30,
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
        marginTop: 15
      },
      postText:{
        fontSize: 17,
        fontWeight: 'bold',
      }
    
    });

