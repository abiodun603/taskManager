import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box } from 'native-base';
import { styled } from 'nativewind';
import { RootStackParamList } from '../../types';
import Layout from '../../layouts/Layout';
import { SelectList } from 'react-native-dropdown-select-list';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
type Props = NativeStackScreenProps<RootStackParamList, "AddPayment">;
const StyledView = styled(View)

const data = [
  {key:'1', value:'Credit/Debit Card'},
  {key:'2', value:'Paypal'},
]

const AddPayment: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [selected, setSelected] = useState("");

  return (
    <Layout
      title = "Payment Method"
  >
    <View style={styles.container}>
      <StyledView className="flex flex-row  items-center space-x-2 mt-2">
        <Box className="basis-1/2 w-full text-black">
          <Text className='text-kgray'>Payment Method</Text> 
        </Box>
        <Box className="basis-1/2 w-full text-black">
          <SelectList 
            setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
            data={data} 
            save="value"
            boxStyles={{borderRadius:8, borderColor: "#BFBFBF"}}
            search={false} 
            defaultOption={data[0]}
          />
        </Box>
      </StyledView>

      <Input
        label = "Card Name"
        placeholder='Enter card name'
      />

      <Input
        label = "Card Number"
        placeholder='0000 0000 0000 0000'
      />

      <StyledView className="flex flex-row  items-center space-x-2">
        <Box className="basis-1/2 w-full text-black">
          <Input
            label = "Card Expiry"
            placeholder='MM / YY'
          />
        </Box>
        <Box className="basis-1/2 w-full text-black">
          <Input
            label = "CVV "
            placeholder='000'
          />
        </Box>
      </StyledView>

      <CustomButton
        title='Save'
        buttonStyle={{marginTop: 20}}
      />


      {/*  */}
      <View className='flex flex-row items-center justify-between mt-16'>
        <View className='space-y-2'>
          {/*  */}
          <Text className='text-kblack2 text-[16px] font-semibold'>₦3,000/month </Text>
          {/*  */}
          <Text className='text-black text-sm font-normal'>Standard Plan</Text>
        </View>

        <Text className='text-kprimary text-[16px] font-normal'>Change</Text>
      </View>
    </View>
  </Layout>
  )
}

export default AddPayment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  }
})