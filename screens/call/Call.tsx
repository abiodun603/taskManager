import {View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import { FlatList } from 'native-base';
import { DATA2 } from '../../utils/dummy';
import NavButton from '../../components/NavButton';
type Props = NativeStackScreenProps<RootStackParamList, "Call">;

const Call: React.FC<Props> = ({ navigation}) => {
  return (
    <Layout
      title='Call Routing Settings'
      // navigation={navigation}
      // drawerNav
    >
      <View style={{padding: 15,}}>
        {/* ====== Participant List =====*/}
        <FlatList
          data={DATA2}
          keyExtractor={item => item.id}
          renderItem={({item}) => <NavButton  pilotNumber={item.name} onPress={() => navigation.navigate(item.link)} /> }
        />
      </View>
    </Layout>
  )
}

export default Call
