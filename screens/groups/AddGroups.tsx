import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import { SelectList } from 'react-native-dropdown-select-list';
type Props = NativeStackScreenProps<RootStackParamList, "AddGroups">;
const data = [
  {key:'1', value:'Simultaneous ring', disabled:true},
  {key:'2', value:'Sequential ring'},
  {key:'3', value:'Random ring'}
]  
const AddGroups: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [switchValue, setSwitchValue] = useState(false); 
  const [selected, setSelected] = React.useState("");

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  }
  return (
    <Layout
      title = "New Number Group"
  >
    <View style={styles.container}>
      {/* if no sip extension exit */}
      <Input
        label="Group Name"
        placeholder='Enter name'
      />

      {/* <Input
        label="Ring Method"
        placeholder='000000'
      /> */}
      <View className='flex flex-col mb-5'>
        <Text className='my-2 font-normal text-sm text-black'>Ring Method</Text>
        <SelectList 
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
          boxStyles={{borderRadius:8, borderColor: "#BFBFBF"}}
          search={false} 
        />
      </View>
    

      <View className='flex flex-col'>
        <Text className='my-2 font-normal text-sm text-black'>Numbers</Text>
        <CustomButton
          title='Add numbers'
          titleColor="#344054"
          buttonStyle={{borderWidth:1, borderColor: "#D0D5DD", backgroundColor: "transparent"}}
        />
      </View>
    </View>

    {/* bottomTab */}
    <CustomRouteBottom title='Save group'  onPress={()=> navigate("Groups")}/>
  </Layout>
  )
}

export default AddGroups

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