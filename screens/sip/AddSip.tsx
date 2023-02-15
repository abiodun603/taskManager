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
type Props = NativeStackScreenProps<RootStackParamList, "AddSip">;

const AddSip: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [switchValue, setSwitchValue] = useState(false); 

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  }
  return (
    <Layout
      title = "Add SIP Extension"
  >
    <View style={styles.container}>
      {/* if no sip extension exit */}
      <Input
        label="Caller ID Name"
        placeholder='Enter name'
      />

      <Input
        label="Extension"
        placeholder='000000'
      />

      <View className='flex flex-row justify-between items-center my-2'>
          <Text
            style={{
              color: Colors.text,
              fontSize: FontSize.small,
              fontFamily: Font["inter-medium"],
              marginRight: 5
            }}
            >Enable voicemail
          </Text>
          <Switch 
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </View>
    </View>

    {/* bottomTab */}
    <CustomRouteBottom title='Save extension'  onPress={()=> navigate("Sip")}/>
  </Layout>
  )
}

export default AddSip

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