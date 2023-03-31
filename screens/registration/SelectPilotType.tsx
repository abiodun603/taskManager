import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import { RootStackParamList } from '../../types';
import { FlatList } from 'react-native-gesture-handler';
import NavButton from '../../components/NavButton';
type Props = NativeStackScreenProps<RootStackParamList, "SelectPilotType">;

export const DATA1 = [
  {
    id: '1',
    pilot:  'Landline Numbers',
  },
  {
    id: '2',
    pilot:  'GSM Numbers',
  },
  {
    id: '3',
    pilot:  '0700 Virtual Numbers',
  },
  {
    id: '4',
    pilot:  '0800 Toll Free Numbers',
  }
];

const SelectPilotType: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title = "Pick One Reach Number Type"
  >
    <View style={styles.container}>
      <FlatList
        data={DATA1}
        keyExtractor={item => item.id}
        renderItem={({item}) => <NavButton iconName="ios-call-outline" pilotNumber={item.pilot} onPress={() => navigate("ChoosePilot")} /> }
      />
    </View>
  </Layout>
  )
}

export default SelectPilotType

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  }
})