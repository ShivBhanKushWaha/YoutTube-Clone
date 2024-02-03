import { Text, View, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  Foundation,
  Entypo,
} from "@expo/vector-icons";
const Shorts = () => {
  return (
    <SafeAreaView className="flex-1 pt-5 relative">
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="text-3xl font-bold text-black">Shorts</Text>
        </View>
        <View className="flex flex-row gap-6 pr-4">
          <AntDesign name="search1" size={30} color="black" />
          <AntDesign name="camerao" size={30} color="black" />
          <Entypo name="dots-three-vertical" size={30} color="black" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={require("../assets/avatar.jpeg")}
            className="w-full h-[86vh]"
          />
        </View>
        <View className="absolute bottom-8 flex flex-col items-center gap-3">
          <View className="flex flex-row items-center pl-3">
            <Pressable>
              <Image
                source={require("../assets/avatar.jpeg")}
                className="rounded-full w-12 h-12"
              />
            </Pressable>
            <View className="flex flex-row">
              <Pressable>
                <Text className="text-white text-base font-medium">
                  @shivbhanKus...
                </Text>
              </Pressable>
              <Pressable>
                <Text className="bg-white text-center text-xl font-semibold rounded-full w-32 ml-2">
                  Insipired
                </Text>
              </Pressable>
            </View>
          </View>
          <View>
            <Text className="text-black w-72" numberOfLines={3}>
              Smart girl and cvedio description and #vedio #shiv Smart girl and
              cvedio description and #vedio #shiv Smart girl and cvedio
              description and #vedio #shiv
            </Text>
          </View>
        </View>
        <View className="absolute">
          <View className="flex flex-col gap-8 pl-[340px] items-center justify-center pt-48">
            <View className="flex items-center">
              <AntDesign name="like2" size={40} color="white" />
              <Text className="text-base text-white">100k</Text>
            </View>
            <View className="flex items-center">
              <AntDesign name="dislike2" size={40} color="white" />
              <Text className="text-base text-white">10k</Text>
            </View>
            <View className="flex items-center">
              <MaterialCommunityIcons
                name="comment-text-outline"
                size={40}
                color="white"
              />
              <Text className="text-base text-white">2.8k</Text>
            </View>
            <View className="flex items-center">
              <FontAwesome name="share" size={40} color="white" />
              <Text className="text-base text-white">Share</Text>
            </View>
            <View className="flex items-center">
              <Foundation name="loop" size={40} color="white" />
              <Text className="text-base text-white">Remix</Text>
            </View>
            <View className="pr-1">
              <Pressable>
                <Image
                  source={require("../assets/avatar.jpeg")}
                  className="rounded-[10px] w-12 h-12"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shorts;
