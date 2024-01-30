import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../components/TopBar'
import { SafeAreaView } from 'react-native-safe-area-context'

const Inspired = () => {
  return (
    <SafeAreaView>
        <TopBar/>
      <Text>Inspired</Text>
    </SafeAreaView>
  )
}

export default Inspired

const styles = StyleSheet.create({})