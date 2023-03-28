import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import { styled } from 'nativewind';
import MasterCard from "../../assets/Mastercard.png"
import { Divider } from 'native-base';
type Props = NativeStackScreenProps<RootStackParamList, "BillDetails">;

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

const PaymentCardDetails = () => {
  return (
      <View className='space-y-3 my-4'>
        {/*  */}
        <View className='flex flex-row justify-between'>
          <Text className='text-black font-medium text-xs'>Basic Plan - ₦1,500</Text>
          <Text className='text-black font-medium text-xs'>21/04/2022</Text>
        </View>
        {/*  */}
        <Text className='text-kgray font-normal text-xs'>21/03/2022 - 20/04/2022</Text>
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
        <Divider />
      </View>
  )
}

const BillDetails: React.FC<Props> = ({ navigation}) => {
  const cards = [1,2, 3, 4]

  return (
    <Layout
      title='Billing Details'
    >
      <View style={styles.container}>
        <Text className='text-xs text-kgray w-[90%] text-center mx-auto' >
          Subscription fees are billed at the beinning of each period and may take a few days after the billing date to appear on your account.
        </Text>
        <View className='mt-6'>
          {/* Card Details  */}
          {
            cards.map(card => <PaymentCardDetails key={card}/>)
          }
        </View>
        <Text className='text-kgray text-xs text-center'>Note: We only show up to 1 year of billing history.</Text>
      </View>
    </Layout>
  )
}

export default BillDetails


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  }
})