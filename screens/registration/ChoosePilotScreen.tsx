import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import NavButton from '../../components/NavButton';
import { DATA1 } from '../../utils/dummy';
type Props = NativeStackScreenProps<RootStackParamList, "ChoosePilot">;


const ChoosePilot: React.FC<Props> = ({ navigation: { navigate }}) => {
  return (
    <Layout
      title='Pick your One Reach number'
    >
      <View style={{paddingHorizontal: 15}}>
        {/* ====== Participant List =====*/}
        <FlatList
          data={DATA1}
          keyExtractor={item => item.id}
          renderItem={({item}) => <NavButton iconName="ios-call-outline" pilotNumber={item.pilot} onPress={() => navigate("PickPilot")} /> }
        />
      </View>
    </Layout>
  )
}

export default ChoosePilot