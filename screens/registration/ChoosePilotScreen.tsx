import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SelectList } from 'react-native-dropdown-select-list'
import Layout from '../../components/shared/Layout';
import NavButton from '../../components/NavButton';
import { DATA1 } from '../../utils/dummy';
type Props = NativeStackScreenProps<RootStackParamList, "ChoosePilot">;


const ChoosePilot: React.FC<Props> = ({ navigation: { navigate }}) => {
  const [selected, setSelected] = React.useState("");
  const data = [
    {key:'1', value:'Mobiles', disabled:true},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers', disabled:true},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},  
  ]  
  return (
    <Layout
      title='Pick your One Reach number'
    >
      <View style={{padding: 15,}}>
        {/* ====== Participant List =====*/}
        <FlatList
          data={DATA1}
          keyExtractor={item => item.id}
          renderItem={({item}) => <NavButton iconName="ios-call-outline" pilotNumber={item.pilot} onPress={() => navigate("PickPilot")} /> }
        />
         {/* <SelectList 
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
        /> */}
        
      </View>

     
    </Layout>
  )
}

export default ChoosePilot