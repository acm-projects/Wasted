import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "../WastedApp/src/screens/Homescreen"
import profile from '../src/screens/profile';
import CreatePosts from '../src/screens/create_posts';
import React from 'react'

const Tab = createBottomTabNavigator(); 

 const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: 5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15
    }}
    onPress={onPress}
  >
    <View
      // style={{
      //   width: 90,
      //   height: 90,
      //   borderRadius: 100,
      //   backgroundColor: '#B6F5F2'
      // }}
    >
      {children}
    </View>
  </TouchableOpacity>
); 

const tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#ffffff',
        height: 80, // Set the height according to your design
        flexDirection: 'row', // Layout the buttons in a row
        justifyContent: 'space-around', // Evenly distribute the buttons
        alignItems: 'center', // Center the buttons vertically
        paddingHorizontal: 10, // Add horizontal padding
      },
      tabBarShowLabel: false,
    }}
    >
        <Tab.Screen name="Home" component ={Homescreen}
        options = {{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style ={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image
                source={require('../assets/Home.png')}
                resizeMode='contain'
                style ={{
                  top: -5,
                  width: 30,
                  height: 30,
                  paddingRight: 10,
                  paddingLeft: 5,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />
              {/* <Text style ={{tintColor: focused ? '#e32f45' : '#748c94'}}>
                Home
              </Text> */}
            </View>
          ) 
        }}
        
        />
        <Tab.Screen name="create_posts" component ={CreatePosts} 
         options = {{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/Createpost.png')}
                resizeMode='contain'
                style ={{
                  width: 30,
                  height: 30,
                  paddingLeft: 10,
                  paddingRight: 5,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />
              
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}/>
          )
        }}
        />
        <Tab.Screen name="Profile" component ={profile}  
        options = {{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style ={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image
                source={require('../assets/Profile.png')}
                resizeMode='contain'
                style ={{
                  top: -5,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />
              {/* <Text style ={{tintColor: focused ? '#e32f45' : '#748c94'}}>
                Profile
              </Text> */}
            </View>
          ) 
        }}
        
        />
    </Tab.Navigator>
  )
}

export default tabs

const styles = StyleSheet.create({})