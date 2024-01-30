import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Home from "../screens/Home"
import Shorts from "../screens/Shorts";
import Inspired from "../screens/Inspired";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  function BottomTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="Shorts"
          component={Shorts}
          options={{
            tabBarLabel: "Shorts",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Feather name="eye" size={24} color="black" />
              ) : (
                <Feather name="eye" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="uplaods"
          component={Home}
          options={{
            tabBarLabelStyle: { display: "none" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="pluscircleo" size={30} color="black" />
              ) : (
                <AntDesign name="pluscircleo" size={30} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="Inspired"
          component={Inspired}
          options={{
            tabBarLabel: "Inspired",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="folder-video" size={24} color="black" />
              ) : (
                <Entypo name="folder-video" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={Profile}
          options={{
            tabBarLabel: "Me",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <EvilIcons name="user" size={40} color="black" />
              ) : (
                <EvilIcons name="user" size={40} color="gray" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom"
          component={BottomTab}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
