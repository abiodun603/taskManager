import {View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import { FlatList } from 'native-base';
import NavButton from '../../components/NavButton';
type Props = NativeStackScreenProps<RootStackParamList, "Virtual">;

const DATA = [
  {
    id: 1,
    vr: "LFC_Okhoro_Benin_IVR"
  },
  {
    id: 2,
    vr: "Christian_House_IVR"
  }
]

const Virtual: React.FC<Props> = ({ navigation: {navigate}}) => {
  return (
    <Layout
      title='Virtual Receptionists'
    >
      <View style={{padding: 15,}}>
        {/* ====== Participant List =====*/}
        <FlatList
          data={DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <NavButton  pilotNumber={item.vr} iconName="play-circle-sharp" onPress={() => navigate("RouteVR")} /> }
        />
      </View>
    </Layout>
  )
}

export default Virtual
