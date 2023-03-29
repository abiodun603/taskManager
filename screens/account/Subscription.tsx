import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import NavButton from '../../components/NavButton';
import CustomButton from '../../components/CustomButton';
import { styled } from 'nativewind';
import { Divider } from 'native-base';
type Props = NativeStackScreenProps<RootStackParamList, "Subscription">;
const StyledView = styled(View)

export const DATA2:{
  id: string,
  name: string,
  link: any,
}[] = [
  {
    id: '1',
    name:  'Billing Details',
    link: "BillDetails"
  },
  {
    id: '2',
    name:  'Manage Payment Info',
    link: "PaymentSetting"
  }
];
const Subscription: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [switchValue, setSwitchValue] = useState(false); 

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  }
  return (
    <Layout
      title = "Subscription & Billing"
  >
    <View style={styles.container}>
      <View className='w-full h-[145px] border border-[#EAECF0] rounded-lg mb-7 p-4'>
        <Text className='text-[#808080] font-normal text-sm mb-3'>Your One Reach Plan</Text>
        {/* plan && price */}
        <StyledView className='flex flex-row items-center space-x-1'>
          <Text className='text-black font-semibold text-[16px] '>Basic</Text>

            <Divider my="2" width={2} _light={{
              bg: "muted.800"
            }} _dark={{
              bg: "muted.50"
            }} />          
          <Text className='text-black font-semibold text-[16px]'>₦1,500/month</Text>
        </StyledView>
        <Text className='text-[#808080] font-normal text-sm my-2'>12 days left</Text>
        <Text className='text-black font-normal text-sm'>Your next billing date is 20 May 2022.</Text>
      </View>

      <CustomButton
        title='Upgrade your plan'
        titleColor="#344054"
        buttonStyle={{borderWidth:1, borderColor: "#D0D5DD", backgroundColor: "transparent", marginBottom: 10}}
      />

      {/* ====== Participant List =====*/}
      {
        DATA2.map((item) => {
          return(
            <NavButton  key={item.id} pilotNumber={item.name} onPress={() => navigate(item.link)} /> 
          )
        })
      }

      <CustomButton
        title='Cancel subscription'
        titleColor="#FF0000"
        buttonStyle={{borderWidth:1, borderColor: "#FF0000", backgroundColor: "transparent", marginVertical: 12}}
      />

      <Text className='text-[#808080] font-normal text-sm my-3'>Preferences</Text>
      <View className='flex flex-row justify-between items-center my-2'>
        <Text
          style={styles.switchLabel}
          >Auto renew One Reach plan
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

export default Subscription

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