import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../components/shared/Layout';
import { FlatList } from 'native-base';
import { DATA2 } from '../../utils/dummy';
import NavButton from '../../components/NavButton';
type Props = NativeStackScreenProps<RootStackParamList, "Call">;

const Call: React.FC<Props> = ({ navigation: {navigate}}) => {
  return (
    <Layout
      title='Call Routing Settings'
    >
      <View style={{padding: 15,}}>
        {/* ====== Participant List =====*/}
        <FlatList
          data={DATA2}
          keyExtractor={item => item.id}
          renderItem={({item}) => <NavButton  pilotNumber={item.name} onPress={() => navigate("PickPilot")} /> }
        />

        
      </View>
    </Layout>
  )
}

export default Call
