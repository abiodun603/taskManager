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
type Props = NativeStackScreenProps<RootStackParamList, "AddDestination">;

const AddDestination: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [switchValue, setSwitchValue] = useState(false); 

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  }
  return (
    <Layout
      title = "Add destination number"
  >
    <View style={styles.container}>
      {/* if no sip extension exit */}
      <Input
        label="Display Name"
        placeholder='Enter name'
      />

      <Input
        label="Phone Number"
        placeholder='Enter phone number'
      />
    
    </View>

    {/* bottomTab */}
    <CustomRouteBottom title='Save number'  onPress={()=> navigate("Sip")}/>
  </Layout>
  )
}

export default AddDestination

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