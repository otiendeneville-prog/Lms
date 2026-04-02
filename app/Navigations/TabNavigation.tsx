import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import LogoScreen from '../Screens/LogoScreen/LogoScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';


const tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <tab.Navigator>
     <tab.Screen name ="home" component={HomeScreen}/>
     <tab.Screen name ="logo" component={LogoScreen}/>
     <tab.Screen name ="profile" component={ProfileScreen}/>
    </tab.Navigator>
  
  )
}