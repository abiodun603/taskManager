import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
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
import { RadioButton } from 'react-native-paper';
type Props = NativeStackScreenProps<RootStackParamList, "Account">;
const StyledView = styled(View)

export const DATA2:{
  id: string,
  name: string,
  link: any,
}[] = [
  {
    id: '1',
    name:  'Call Routing Settings',
    link: "CallRoute"
  },
  {
    id: '2',
    name:  'Share pilot number',
    link: "Account"
  },
  {
    id: '3',
    name:  'Account Settings',
    link: "AccountSetting"
  }
];

const options = [
  { id: 1,value:"first", name: "24 hours Open Office",description: "Incoming calls will be handled the same way all the time." },
];

/**
   * 
   * The following toggleOption creates a new array 
   * where the given id is checked, 
   * all the other options are unchecked.
   */
 function toggleOption(options: any[],id: number, checked: any) {
  return options.map((option: { id: number; }) =>
    option.id === id ? { ...option, checked } : { ...option, checked: false }  );
}

export const AccountCard = () => {
  const [checked, setChecked] = React.useState('first');
  const [switchValue, setSwitchValue] = useState(false); 

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  }
  return (
    <View className={checked ? `flex-row h-[145px] space-x-2  w-full border border-[#990099] rounded-lg px-4 pt-4 mb-2` : `flex-row h-[145px] space-x-2  w-full border border-[#BFBFBF] rounded-lg px-4 pt-4 `} >
    {/*  */}
    <View className='w-full'>
      {/* plan && price */}
      <StyledView className='space-y-1'>
        <Text className='text-[#808080] font-normal text-sm ml-11'>Active</Text>
        <View>
          <View className='flex flex-row items-center justify-between'>
            {/* radio */}
            <View className='flex flex-row items-center space-x-2'>
              <View className= {checked ? 'h-[35px] w-[35px] bg-[#990099] rounded-full' : 'h-[35px] bg-[#BFBFBF] rounded-full'}>
                <RadioButton
                  value="first"
                  status={ checked ? 'checked' : 'unchecked' }
                  color= {Colors.background}
                />
              </View>
              {/* number */}
              <Text className='text-black font-semibold text-[16px]'>+1-202-555-0136</Text>
            </View>

            {/* switch */}
            <Switch 
              onValueChange={toggleSwitch}
              value={switchValue}
            />
          </View>
        </View>
        
        <Text className='text-[#808080] font-normal text-sm ml-11'>New Messages: 4</Text>
        <Text className='text-[#808080] font-normal text-sm ml-11'>Missed calls: 4</Text>
      </StyledView>
    </View>
  </View>
  )
}

const Account: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [checkedList, setCheckedList] = useState(uncheckAll(options));

  function uncheckAll(options: any[]) {
    return options.map((option) => ({
      ...option,
      checked: false
    }));
  }



  return (
    <Layout
      title = "My Account"
  >
    <View style={styles.container}>
      <AccountCard/>
      {/* Add One Reach Number */}
      <CustomButton
        title='Add One Reach number'
        titleColor="#344054"
        buttonStyle={{borderWidth:1, borderColor: "#D0D5DD", backgroundColor: "transparent", marginVertical: 15}}
      />

      <TouchableOpacity
        onPress={() => navigate("Subscription")}
       className='w-full h-[145px] border border-[#EAECF0] rounded-lg mb-2 p-4'
      >
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
      </TouchableOpacity>
      
      {/* Add One Reach Number */}
      <CustomButton
        title='Change your plan'
        titleColor="#344054"
        buttonStyle={{borderWidth:1, borderColor: "#D0D5DD", backgroundColor: "transparent", marginVertical: 15}}
      />

      {/* ====== Participant List =====*/}
      {
        DATA2.map((item) => {
          return(
            <NavButton  key={item.id} pilotNumber={item.name} onPress={() => navigate(item.link)} /> 
          )
        })
      }
    </View>

    {/* bottomTab */}
    <CustomRouteBottom title='Save '  onPress={()=> navigate("Sip")}/>
  </Layout>
  )
}

export default Account

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