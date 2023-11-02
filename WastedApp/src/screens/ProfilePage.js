import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";


const ProfileScreen = () => {
  const user = getAuth().currentUser;

  /*Will Add handling of buttons later
  const handleEditFullName = () => {   
  }

  const handleEditUserName = () => {   
  }*/

  const [posts, setPosts] = useState(0);
  const [claims, setClaims] = useState(0);

  return (
    <View style={styles.TitleContainer}>
      <Text style={styles.title}>Your Profile </Text>
      <Text style={styles.subTitle}>First and Last Name</Text>
        <View style={styles.Container}>
          <Text>Posts</Text>
          <Text>Claims</Text>
          <Text>Email: {user?.email}</Text>
          <Text> Spread the Word! </Text>
          <Text> Terms and Conditions </Text>
          <Text> FAQ </Text>
          <Text> Privacy </Text>
        </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  TitleContainer: {
    backgroundColor: '#FFF5EB80',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Container: {
    backgroundColor: '#FFF5EB80',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#0782f9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  title: {
    marginTop: 20,
    color: '#2A2D34',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: 'Sen',
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 50,
    marginBottom: 30, // Adjust this spacing
  },
  subTitle: {
    marginTop: 20,
    color: '#2A2D34',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: 'Sen',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 50,
    marginBottom: 30, // Adjust this spacing
  },
  subSubTitle: {
    marginTop: 20,
    color: '#2A2D34',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: 'Sen',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 50,
    marginBottom: 30, // Adjust this spacing
  },
});