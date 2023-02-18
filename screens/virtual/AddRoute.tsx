import { StyleSheet,  Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import { styled } from 'nativewind';
import { SelectList } from 'react-native-dropdown-select-list';
type Props = NativeStackScreenProps<RootStackParamList, "AddRoute">;

const DATA =[
  {
    id: 1,
    name: "Press 1",
    number: "Ring on a number",
    ringType: "08037128082"
  },
  {
    id: 2,
    name: "Press 2",
    number: "Ring on a group",
    ringType: "LFC_Okhoro_Benin"
  },
  {
    id: 3,
    name: "Press 3",
    number: "Ring on a number",
    ringType: "08033332311"
  },
  {
    id: 4,
    name: "Press 4",
    number: "Send to VR",
    ringType: "LFC_Lagos"
  }
]


const AddRoute: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [selected, setSelected] = useState("");


  const data = [
    {key:'1', value:'Press 1'},
    {key:'2', value:'Christian_House_IVR'},
  ]
  return (
    <Layout
      title = "Add Route"
  >
    <View style={styles.container}>
      <View className='flex flex-col mb-5'>
        <Text className='my-2 font-normal text-sm text-black'>Key</Text>
        <SelectList 
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
          boxStyles={{borderRadius:8, borderColor: "#BFBFBF"}}
          search={false} 
          defaultOption={data[0]}
        />
      </View>
      <View className='flex flex-col mb-5'>
        <Text className='my-2 font-normal text-sm text-black'>Action</Text>
        <SelectList 
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
          boxStyles={{borderRadius:8, borderColor: "#BFBFBF"}}
          search={false} 
          placeholder='Select action'
        />
      </View>
      <View className='flex flex-col mb-5'>
        <Text className='my-2 font-normal text-sm text-black'>Destination</Text>
        <SelectList 
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
          boxStyles={{borderRadius:8, borderColor: "#BFBFBF"}}
          search={false} 
          placeholder='Select destination'
        />
      </View>
    </View>

    {/* bottomTab */}
    <CustomRouteBottom title='Save'  onPress={()=> navigate("Virtual")}/>
  </Layout>
  )
}

export default AddRoute

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
  time: {
    fontSize: FontSize.small,
    fontFamily: Font['inter-regular'],
    color: Colors.gray,
  },

})