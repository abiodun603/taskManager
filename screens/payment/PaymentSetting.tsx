import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Divider } from 'native-base';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Entypo from "@expo/vector-icons/Entypo"
import MasterCard from "../../assets/Mastercard.png"
import { styled } from 'nativewind';
import { RootStackParamList } from '../../types';
import Layout from '../../layouts/Layout';
import { RadioButton } from 'react-native-paper';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';
type Props = NativeStackScreenProps<RootStackParamList, "PaymentSetting">;
const StyledView = styled(View)

const ThreeDot = () => {
  const dot = [1,2, 3, 4]
  return(
    <StyledView className='flex flex-row space-x-1 mr-2'>
      {
        dot.map(dot => <View key={dot} className='w-1 h-1 rounded-full bg-kgray'/>)
      }
    </StyledView>
  )
}

const PaymentSetting: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [checked, setChecked] = React.useState('first');
  const [switchValue, setSwitchValue] = useState(false); 

  function uncheckAll(options: any[]) {
    return options.map((option) => ({
      ...option,
      checked: false
    }));
  }

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  }

  return (
    <Layout
      title = "Payment Method"
  >
    <View style={styles.container}>
        <Text className='text-xs text-kgray w-[90%] text-center mx-auto' >
          Edit your payment details, add a backup, or switch your preferred payment method.
        </Text>
        <View className={checked ? `flex-row h-[130px] space-x-2  w-full border border-[#990099] rounded-lg px-4 pt-4 mt-4` : `flex-row h-[130px] space-x-2  w-full border border-[#BFBFBF] rounded-lg px-4 pt-4 mt-4`} >
          {/*  */}
          <View className='w-full space-y-2'>
            {/* plan && price */}
            <StyledView className='flex flex-row items-center justify-between'>
              {/*  */}
              <View className='flex flex-row items-center space-x-3'>
                <Image 
                  source={MasterCard}
                />
                <StyledView className='flex flex-row space-x-2'>
                  <ThreeDot/>
                  <ThreeDot/>
                  <ThreeDot/>
                </StyledView>
                <Text className='text-kgray font-normal text-xs'>0331</Text>
              </View>

              <View className= {checked ? 'h-[35px] w-[35px] bg-[#990099] rounded-full' : 'h-[35px] bg-[#BFBFBF] rounded-full'}>
                <RadioButton
                  value="first"
                  status={ checked ? 'checked' : 'unchecked' }
                  color= {Colors.background}
                />
              </View>

            </StyledView>
            <Text className='text-kgray text-xs ml-9'>Expiry 06/2024</Text>
            <Text className='text-kgray font-medium text-xs ml-9 '>Set as default <Text className='text-kprimary font-medium pl-4' > Edit</Text></Text>
          </View>
        </View>
        <View className='mt-8' />
        <CustomButton
          title='Add Payment Method'
          titleColor="#344054"
          buttonStyle={{borderWidth:1, borderColor: "#D0D5DD", backgroundColor: "transparent", marginBottom: 10}}
        />
      </View>
  </Layout>
  )
}

export default PaymentSetting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  }
})