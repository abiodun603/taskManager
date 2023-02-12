import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'
import Layout from '../components/shared/Layout'
import { CallRecord, recentHistory } from '../components/PageComponents/RecentCalls'

const RecentCalls = () => {
  return (
    <Layout
      title='Recent Calls'
    >
      <ScrollView style={styles.container}>
        <View style={{marginBottom: 20}}/>
        {/* calls */}
        {
          recentHistory.length > 0 && 
          recentHistory.map((call) => {
            return (
              <CallRecord key={call.id} time={call.time} name={call.name} />
            )
          })
        }
      </ScrollView>
    </Layout>
  )
}

export default RecentCalls

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})