import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import { styled } from 'nativewind';
import { Box, Divider } from 'native-base';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
type Props = NativeStackScreenProps<RootStackParamList, "Groups">;
const StyledView = styled(View)

const DATA =[
  {
    id: 1,
    name: "Senetor",
    number: "09069567064, ...",
    ringType: "Simultaneous ring"
  },
  {
    id: 2,
    name: "Abiodun",
    number: "09069567064, ...",
    ringType: "Simultaneous ring"
  },
  {
    id: 3,
    name: "Steve",
    number: "09069567064, ...",
    ringType: "Simultaneous ring"
  },
  {
    id: 4,
    name: "Olamide",
    number: "09069567064, ...",
    ringType: "Simultaneous ring"
  }
]

const Groups: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title = "Number Groups"
  >
    <View style={styles.container}>
      {/* if no sip extension exit */}
      {/* <Text style={[styles.time, {textAlign: 'center'}]}>No extension added yet.</Text> */}
      <StyledView className="flex flex-row  items-center space-x-1 mt-6">
        <Box className="basis-1/3 text-black">
          <Text className='text-[#808080] text-sm font-normal'>Name</Text>
        </Box>
        <Box className="basis-1/3  text-black ">
          <Text className='text-[#808080] text-sm font-normal'>Details</Text>
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

    {/* bottomTab */}
    <CustomRouteBottom title='Add group' onPress={()=>navigate("AddGroups") } />
  </Layout>
  )
}

export default Groups

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
    marginTop: 25
  },

})