import { StyleSheet} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import FontSize from '../constants/FontSize'
import {PendingTask, RecentCalls} from '../components/PageComponents/RecentCalls'
import { useNavigation } from '@react-navigation/native'



const Home = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <RecentCalls headerTitle='Recent Calls' onPress={()=>navigation.navigate("RecentCalls")}/>
      <RecentCalls headerTitle='Recent Messages'/>
      <PendingTask/>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  // Home
  container: {
    padding: 20
  },
  // recent calls
  recentContainer: {
    width: "100%",
    height: 221,
    borderWidth: 1,
    borderRadius: FontSize.base,
    borderColor: "#EAECF0",
    paddingHorizontal: 15,
    paddingVertical: 18
  }
})