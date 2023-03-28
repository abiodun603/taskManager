import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import { SelectList } from 'react-native-dropdown-select-list';
type Props = NativeStackScreenProps<RootStackParamList, "CallRoute">;

const data = [
  {key:'1', value:'Ring on an extension', disabled:true},
  {key:'2', value:'Ring on a number'},
  {key:'3', value:'Ring group'},
  {key:'3', value:'Direct to virtual receptionist'},
  {key:'3', value:'Play a message'}
]  
const CallRoute: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [switchValue, setSwitchValue] = useState(false); 
  const [selected, setSelected] = React.useState("");

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  }
  return (
    <Layout
      title = "Call Routing"
  >
    <View style={styles.container}>
      
      <View className='flex flex-col mb-5'>
        <Text className='my-2 font-normal text-sm text-black'>Routing Action</Text>
        <SelectList 
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
          boxStyles={{borderRadius:8, borderColor: "#BFBFBF"}}
          search={false} 
          placeholder='Select call routing action'
        />
      </View>
      
      <View className='flex flex-col mb-5'>
        <Text className='my-2 font-normal text-sm text-black'>Call Destination</Text>
        <SelectList 
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
          boxStyles={{borderRadius:8, borderColor: "#BFBFBF"}}
          search={false} 
          placeholder='Select call destination'
        />
      </View>

    </View>

    {/* bottomTab */}
    {/* <CustomRouteBottom title='Save group'  onPress={()=> navigate("Groups")}/> */}
  </Layout>
  )
}

export default CallRoute

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