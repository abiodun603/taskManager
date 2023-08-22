import { View, Text,StyleSheet } from 'react-native'
import React, { FC } from 'react'

// 
import Layout from '../../layouts/Layout'
import TopNavPanel from '../../navigation/TopTabs';


// ** Types
import { RootStackParamList } from "../../types";

//
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Personal from '../identification/Personal';
import Role from '../identification/Role';
type Props = NativeStackScreenProps<RootStackParamList, "Identification">;

const TabData = [
  { name: "Personal Info", component: Personal },
  { name: "Role & Verification", component: Role },
];

const Identification: FC<Props> = () => {
  return (
    <Layout 
      title = "Identity Verification"
    >
      <View style={{ flex: 1 }} className='px-4'>
        <TopNavPanel tabs={TabData} /> 
      </View>
    </Layout>
  )
}

export default Identification

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