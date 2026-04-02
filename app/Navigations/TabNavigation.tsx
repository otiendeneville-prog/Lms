import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import LogoScreen from "../Screens/LogoScreen/LogoScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { blue } from "react-native-reanimated/lib/typescript/Colors";

const tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 12, color: color, marginTop: -7 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="logo"
        component={LogoScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 12, color: color, marginTop: -7 }}>
              Logo
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-edge" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 12, color: color, marginTop: -7 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </tab.Navigator>
  );
}
