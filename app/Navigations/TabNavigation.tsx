import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
     <Tab.Screen name ="name" component={}/>
    </Tab.Navigator>
  
  )
}