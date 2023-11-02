import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "../src/screens/Homescreen"
import profile from '../src/screens/profile';
import create_posts from '../src/screens/create_posts';
import React from 'react'

const Tab = createBottomTabNavigator(); 

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 90,
        height: 90,
        borderRadius: 100,
        backgroundColor: '#B6F5F2'
      }}
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
        bottom: 10,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
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
                  width: 50,
                  height: 50,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />
              <Text style ={{tintColor: focused ? '#e32f45' : '#748c94'}}>
                Home
              </Text>
            </View>
          ) 
        }}
        
        />
        <Tab.Screen name="create_posts" component ={create_posts} 
         options = {{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/Createpost.png')}
                resizeMode='contain'
                style ={{
                  width: 60,
                  height: 60,
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
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />
              <Text style ={{tintColor: focused ? '#e32f45' : '#748c94'}}>
                Profile
              </Text>
            </View>
          ) 
        }}
        
        />
    </Tab.Navigator>
  )
}

export default tabs

const styles = StyleSheet.create({})