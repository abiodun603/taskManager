import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

// 
import Layout from '../../layouts/Layout'
import TopNavPanel from '../../navigation/TopTabs';
import Resources from '../resources/Resources';
import Events from '../events/Events';
import Sent from './Sent';

// ** Types
import { RootStackParamList } from "../../types";

//
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Recieved from './Recieved';
type Props = NativeStackScreenProps<RootStackParamList, "CommunityInvites">;

const TabData = [
  { name: "Received", component: Recieved },
  { name: "Sent", component: Sent },
];

const CommunityInvites = () => {
  return (
    <Layout 
      title = "Community Invites"
    >
      <View style={{ flex: 1 }}>
        <TopNavPanel tabs={TabData} /> 
      </View>
    </Layout>
  )
}

export default CommunityInvites

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15
  }
})