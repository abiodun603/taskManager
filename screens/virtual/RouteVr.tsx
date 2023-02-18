import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import Input from '../../components/Input';
import { styled } from 'nativewind';
import { Box, Divider } from 'native-base';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import { SelectList } from 'react-native-dropdown-select-list';
type Props = NativeStackScreenProps<RootStackParamList, "RouteVR">;
const StyledView = styled(View)

const DATA =[
  {
    id: 1,
    name: "Press 1",
    number: "Ring on a number",
    ringType: "08037128082"
  },
  {
    id: 2,
    name: "Press 2",
    number: "Ring on a group",
    ringType: "LFC_Okhoro_Benin"
  },
  {
    id: 3,
    name: "Press 3",
    number: "Ring on a number",
    ringType: "08033332311"
  },
  {
    id: 4,
    name: "Press 4",
    number: "Send to VR",
    ringType: "LFC_Lagos"
  }
]


const RouteVr: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [selected, setSelected] = useState("");


  const data = [
    {key:'1', value:'LFC_Okhoro_Benin_IVR'},
    {key:'2', value:'Christian_House_IVR'},
  ]
  return (
    <Layout
      title = "VR Configuration"
  >
    <View style={styles.container}>
      {/* if no sip extension exit */}
      <Input
        label="IVR Message"
        placeholder='LFC_Okhoro_Benin_IVR'
      />

      <View className='flex flex-col mb-5'>
        <Text className='my-2 font-normal text-sm text-black'>Ring Method</Text>
        <View className='flex-row items-center'>
          <View className='flex-grow mr-3'>
            <SelectList 
              setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
              data={data} 
              save="value"
              boxStyles={{borderRadius:8, borderColor: "#BFBFBF"}}
              search={false} 
            />
          </View>
          <Ionicons name="play-circle" size={25} color={Colors.gray}/>
        </View>
      </View>

      <View className='flex flex-row justify-between items-center my-2'>
        <Text
          style={{
            color: Colors.gray,
            fontSize: FontSize.small,
            fontFamily: Font["inter-regular"],
            marginRight: 5
          }}
          >VR Menu
        </Text>
      </View>
        {/* list */}
      <View>
        <StyledView className="flex flex-row  items-center space-x-1 mt-6">
          <Box className="basis-1/3 text-black">
            <Text className='text-[#808080] text-sm font-normal'>Key</Text>
          </Box>
          <Box className="basis-1/3  text-black ">
            <Text className='text-[#808080] text-sm font-normal'>Destination</Text>
          </Box>
        </StyledView>
        {
          DATA.map((data) => {
            return (
              <View key={data.id}>
                <StyledView className="flex flex-row  items-center space-x-1 mt-6">
                  <Box className="basis-1/3 text-black">
                    <Text>{data.name}</Text>
                  </Box>
                  <Box className="basis-1/3  text-black ">
                    <Text>{data.number}</Text>
                    <Text className='text-[#808080] text-sm'>{data.ringType}</Text>
                  </Box>
                  <Box className="basis-1/3  text-black items-end">
                    <MaterialCommunityIcons name="trash-can" size={25} color="#FF0000"  />
                  </Box>
                </StyledView>
                <Divider className='mt-5'/>
              </View>
            )
          })
        }
      </View>
    </View>

    {/* bottomTab */}
    <CustomRouteBottom title='Add route'  onPress={()=> navigate("AddRoute")}/>
  </Layout>
  )
}

export default RouteVr

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