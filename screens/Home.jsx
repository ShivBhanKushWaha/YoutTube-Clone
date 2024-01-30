import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import TopBar from '../components/TopBar'

const Home = () => {
  return (
    <SafeAreaView>
      <TopBar/>
      <View>
        <View>
          <Text>
            Home Page
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})