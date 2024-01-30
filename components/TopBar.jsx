import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const TopBar = () => {
  return (
    <View className="mt-4 flex-2 bg-white h-10 justify-between px-4 items-center flex-row">
      <View>
        <AntDesign name="youtube" size={24} color="black" />
      </View>
      <View className="flex-row gap-10 py-2">
        <View>
          <MaterialIcons name="screenshot-monitor" size={24} color="black" />
        </View>
        <View>
          <Feather name="bell" size={24} color="black" />
        </View>
        <View>
          <AntDesign name="search1" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
