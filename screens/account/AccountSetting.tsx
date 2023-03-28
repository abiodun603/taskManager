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
type Props = NativeStackScreenProps<RootStackParamList, "AccountSetting">;

const AccountSetting: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [switchValue, setSwitchValue] = useState(false); 

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  }
  return (
    <Layout
      title = "Account Settings"
  >
    <View style={styles.container}>
      <Text className='text-[#808080] font-normal text-sm mb-3'>Account Information</Text>
      <Input
        label="First Name"
        placeholder='Abiodun'
      />

      <Input
        label="Last Name"
        placeholder='Fikayo'
      />

      <Input
        label="Contact Phone Number"
        placeholder='08101436677'
      />

      <Input
        label="Company Name"
        placeholder='Macfly Inc.'
      />

      <Input
        label="Email Address"
        placeholder='m.fikayo@example.com'
        keyboardType='email-address'
      />  

      <Text className='text-[#808080] font-normal text-sm my-3'>Other Preferences</Text>
      <View className='flex flex-row justify-between items-center my-2'>
        <Text
          style={styles.switchLabel}
          >Get notifications and other updates
          via email
        </Text>
        <Switch 
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
      <View className='flex flex-row justify-between items-center my-2'>
        <Text
          style={styles.switchLabel}
          >Add business to One Reach directory
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

export default AccountSetting

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