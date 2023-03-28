import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import { SelectList } from 'react-native-dropdown-select-list';
type Props = NativeStackScreenProps<RootStackParamList, "CallFlow">;

const data = [
  {key:'1', value:'Ring on an extension', disabled:true},
  {key:'2', value:'Ring on a number'},
  {key:'3', value:'Ring group'},
  {key:'3', value:'Direct to virtual receptionist'},
  {key:'3', value:'Play a message'}
] 

const CallFlow: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [switchValue, setSwitchValue] = useState(false); 
  const [selected, setSelected] = React.useState("");

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  }
  return (
    <Layout
      title = "Account Settings"
  >
    <View style={styles.container}>
      <View className='relative flex flex-col mb-5'>
        <Text className='my-2 font-normal text-sm text-black'>Greetings Message</Text>
        <SelectList 
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
          boxStyles={{borderRadius:8, borderColor: "#BFBFBF", paddingLeft: 50}}
          search={false} 
          placeholder='Angela_Record_12/04/2022.wav'
        />
        <Feather name='music' size={20}  color={Colors.gray} style={{position: 'absolute', bottom: 14, left: 15}}/>
      </View>

      <View className='relative flex flex-col mb-5'>
        <Text className='my-2 font-normal text-sm text-black'>Ringback Tone</Text>
        <SelectList 
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
          boxStyles={{borderRadius:8, borderColor: "#BFBFBF", paddingLeft: 50}}
          search={false} 
          placeholder='Omo_Ope_Asake.mp3'
        />
        <Feather name='music' size={20}  color={Colors.gray} style={{position: 'absolute', bottom: 14, left: 15}}/>
      </View>
      <View className='relative flex flex-col mb-5'>
        <Text className='my-2 font-normal text-sm text-black'>Music On Hold</Text>
        <SelectList 
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
          data={data} 
          save="value"
          boxStyles={{borderRadius:8, borderColor: "#BFBFBF", paddingLeft: 50}}
          search={false} 
          placeholder='Default Beep'
        />
        <Feather name='music' size={20}  color={Colors.gray} style={{position: 'absolute', bottom: 14, left: 15}}/>
      </View>

      <Text className='text-[#808080] font-normal text-sm my-3'>Voicemail</Text>
      <View className='flex flex-row justify-between items-center my-2'>
        <Text
          style={styles.switchLabel}
          >Send to voicemail after no answer
        </Text>
        <Switch 
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
      <View className='flex flex-row justify-between items-center my-2'>
        <Text
          style={styles.switchLabel}
          >Receive voicemail on app
        </Text>
        <Switch 
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
      <View className='flex flex-row justify-between items-center my-2'>
        <Text
          style={styles.switchLabel}
          >Send a copy of voicemail via email
        </Text>
        <Switch 
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>

      <Text className='text-[#808080] font-normal text-sm my-3'>Call Recording</Text>
      <View className='flex flex-row justify-between items-center my-2'>
        <Text
          style={styles.switchLabel}
          >Enable call recording
        </Text>
        <Switch 
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </View>

    {/* bottomTab */}
    <CustomRouteBottom title='Save '  onPress={()=> navigate("Sip")}/>
  </Layout>
  )
}

export default CallFlow

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
  switchLabel: {
    color: Colors.text,
    fontSize: FontSize.small,
    fontFamily: Font["inter-regular"],
    marginRight: 5
  }

})