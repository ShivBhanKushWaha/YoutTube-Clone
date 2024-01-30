import {
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  MaterialIcons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
  FontAwesome,
} from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView>
      <View className="mt-4">
        <View className="flex-row justify-end gap-8 px-4">
          <MaterialIcons name="screenshot-monitor" size={24} color="black" />
          <Feather name="bell" size={24} color="black" />
          <AntDesign name="search1" size={24} color="black" />
          <AntDesign name="setting" size={24} color="black" />
        </View>
      </View>

      <View className="mt-6 flex-row">
        <View>
          <Image
            source={require("../assets/avatar.jpeg")}
            className="w-28 h-28 rounded-full"
          />
        </View>
        <View className="justify-center pl-4">
          <View className="w-[75%]">
            <Text className="text-3xl">Shivbhan kushwaha</Text>
          </View>
          <View className="flex-row w-full items-center gap-5">
            <View className="w-32">
              <Text className="text-base" numberOfLines={2}>
                @Shivbhankushwaha3051
              </Text>
            </View>
            <View>
              <Pressable className="flex-row justify-center items-center">
                <Entypo name="dot-single" size={24} color="black" />
                <Text>View Channel</Text>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-2 h-8"
      >
        <View className="flex-row bg-gray-400 px-5 mx-2 items-center rounded-full ">
          <View>
            <MaterialIcons name="switch-account" size={24} color="black" />
          </View>
          <View className="pl-3">
            <Text className="text-white font-medium text-base">
              Switch account
            </Text>
          </View>
        </View>
        <View className="flex-row bg-gray-400 px-5 mx-2 items-center rounded-full ">
          <View>
            <AntDesign name="google" size={24} color="white" />
          </View>
          <View className="pl-3">
            <Text className="text-white font-medium text-base">
              Google Account
            </Text>
          </View>
        </View>
        <View className="flex-row bg-gray-400 px-5 mx-2 items-center rounded-full ">
          <View className="">
            <MaterialCommunityIcons
              name="incognito-circle"
              size={26}
              color="black"
            />
          </View>
          <View className="pl-3">
            <Text className="text-white font-medium text-base">
              Turn on Incognito
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="mt-5 px-3">
        <View className="flex-row justify-between">
          <Text className="text-3xl font-medium text-black">History</Text>
          <Pressable className="bg-gray-400 px-4 rounded-full justify-center border border-gray-900">
            <Text className="text-white text-base font-medium">View all</Text>
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="mt-2 px-16">
            <Text>Sm</Text>
          </View>
          <View className="mt-2 px-16">
            <Text>Sm</Text>
          </View>
          <View className="mt-2 px-16">
            <Text>Sm</Text>
          </View>
          <View className="mt-2 px-16">
            <Text>Sm</Text>
          </View>
        </ScrollView>
      </View>

      <View className="mt-5 px-3">
        <View className="flex-row justify-between">
          <Text className="text-3xl font-medium text-black">Playlists</Text>
          <Pressable className="bg-gray-400 px-4 rounded-full justify-center border border-gray-900">
            <Text className="text-white text-base font-medium">View all</Text>
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="mt-2 px-16">
            <Text>Sm</Text>
          </View>
          <View className="mt-2 px-16">
            <Text>Sm</Text>
          </View>
          <View className="mt-2 px-16">
            <Text>Sm</Text>
          </View>
          <View className="mt-2 px-16">
            <Text>Sm</Text>
          </View>
        </ScrollView>
      </View>

      <View className="mt-5">
        <View className="flex-row gap-8 pl-5">
          <Octicons name="video" size={24} color="black" />
          <Text>Your videos</Text>
        </View>
        <View className="flex-row gap-8 pl-5 mt-2 items-center">
          <MaterialIcons name="download" size={24} color="black" />
          <View>
            <Text>Downloads</Text>
            <Text>0 videos</Text>
          </View>
        </View>
      </View>
      <Text className="h-[1px] border-[#D0D0D0] border-[1px] mt-4 " />

      <View className="mt-5">
        <View className="flex-row gap-8 pl-5">
          <MaterialCommunityIcons name="movie-open" size={24} color="black" />
          <Text>Your movies</Text>
        </View>
        <View className="flex-row gap-8 pl-5 mt-2 items-center">
          <MaterialIcons name="workspace-premium" size={24} color="black" />
          <View>
            <Text>Get DivineSight premium</Text>
          </View>
        </View>
      </View>
      <Text className="h-[1px] border-[#D0D0D0] border-[1px] mt-4 " />

      <View className="mt-5">
        <View className="flex-row gap-8 pl-5">
          <FontAwesome name="bar-chart" size={24} color="black" />
          <Text>Time spent</Text>
        </View>
        <View className="flex-row gap-8 pl-5 mt-1 items-center">
          <AntDesign name="question" size={24} color="black" />
          <View>
            <Text>Help and Feedback</Text>
          </View>
        </View>
      </View>
      <Text className="h-[1px] border-[#D0D0D0] border-[1px] mt-4 " />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
