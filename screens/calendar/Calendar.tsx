import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import { styled } from 'nativewind';
import { Box, Divider } from 'native-base';
type Props = NativeStackScreenProps<RootStackParamList, "Calendar">;
const StyledView = styled(View)

const DATA =[
  {
    id: 1,
    name: "All day",
    days: "Sun - Sat",
    time: "00:00 - 00:00"
  },
  {
    id: 2,
    name: "Working",
    days: "Mon - Fri",
    time: "09:00 - 17:00"
  },
  {
    id: 3,
    name: "All day",
    days: "Sun - Sat",
    time: "00:00 - 00:00"
  },
  {
    id: 4,
    name: "Working",
    days: "Mon - Fri",
    time: "09:00 - 17:00"
  },
]

const Calendar: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title = "Configure Calendar"
  >
    <View style={styles.container}>
      {/* if no sip extension exit */}
    
      <StyledView className="flex flex-row  items-center space-x-1 mt-6">
        <Box className="basis-1/3 text-black">
          <Text className='text-[#808080] text-sm font-normal'>Title</Text>
        </Box>
        <Box className="basis-1/3  text-black ">
          <Text className='text-[#808080] text-sm font-normal'>Details</Text>
        </Box>
      </StyledView>

      {
        DATA.length > 0 ?
        DATA.map((data) => {
          return (
            <View key={data.id}>
              <StyledView className="flex flex-row  items-center space-x-1 mt-6">
                <Box className="basis-1/3 text-black">
                  <Text>{data.name}</Text>
                </Box>
                <Box className="basis-1/3  text-black ">
                  <Text>{data.days}</Text>
                  <Text className='text-[#808080] text-sm'>{data.time}</Text>
                </Box>
                <Box className="basis-1/3  text-black items-end">
                  <MaterialCommunityIcons name="trash-can" size={25} color="#FF0000"  />
                </Box>
              </StyledView>
              <Divider className='mt-5'/>
            </View>
          )
        }) : <Text style={[styles.time, {textAlign: 'center'}]}>No extension added yet.</Text>
      }
    </View>

    {/* bottomTab */}
    <CustomRouteBottom title='Add calendar configuration'  onPress={()=> navigate('ConfigCalendar')}/>
  </Layout>
  )
}

export default Calendar

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