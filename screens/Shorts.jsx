import { StyleSheet, Text, View,ScrollView ,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Shorts = () => {
  return (
    <SafeAreaView className="flex-1 py-5 absolute">
      <ScrollView showsVerticalScrollIndicator={false} >
      <View >
          <Image
            source={require("../assets/avatar.jpeg")}
            className="w-full h-screen"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Shorts

const styles = StyleSheet.create({})