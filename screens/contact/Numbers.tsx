import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Divider } from 'native-base';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Entypo from "@expo/vector-icons/Entypo"
import { styled } from 'nativewind';
import Layout from '../../layouts/Layout';
import { RootStackParamList } from '../../types';
import { TouchableOpacity } from 'react-native';
type Props = NativeStackScreenProps<RootStackParamList, "Numbers">;
const StyledView = styled(View)

interface MessageCardProps {
  name?: string ;
  location?: string;
  group?: string[];
  phone?: string | boolean ;
  onPress?: ()=>void;
  divider?: boolean
  iconName?: any;
  iconColor? : any;
}

export const MessageCard: React.FC<MessageCardProps> = ({name , location, group, phone, iconName, iconColor, onPress=()=>{}, divider}) => {
  return(
    <TouchableOpacity 
      onPress={onPress }
      style={styles.cardContainer}>
        <View style={{flexDirection: "row"}}>
          <View style={{marginLeft: 10}}>
            {/* name & & location */}
            <StyledView className='flex flex-row space-x-1'>
              <Text style={styles.title}>{name}</Text>
              {
                divider &&
                <Divider my="2" width={2} _light={{
                  bg: "muted.800"
                }} _dark={{
                  bg: "muted.50"
                }} />
              }
              
              <Text style={styles.title}>{location}</Text>
            </StyledView>
            {/* incoming message type */}

            {/* <View className='flex flex-row space-x-2'>
              {
                group?.slice(0, 2).map((item, i) => {
                  let count = 0

                  return (
                    <Text key={i} style={styles.description} className='mt-1'>{item}</Text>
                  )
                })
              }
              {phone && <Text style={styles.description} className='mt-1'>{phone}</Text>}
            </View> */}
          </View>
        </View>
        {/*  */}
        {
          iconName && 
          <TouchableOpacity
            onPress={onPress}
          >
            <MaterialCommunityIcons name={iconName} size={25} color={iconColor}  />
          </TouchableOpacity>
        }
    </TouchableOpacity>
  )
}

const Numbers: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title = "New Number Groups"
  >
    <View style={styles.container}>

    </View>
  </Layout>
  )
}

export default Numbers

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
  cardContainer: {
    display: 'flex',
    width: "100%",
    height: 63,
    flexDirection: "row",
    paddingHorizontal: 12,
    borderWidth: 1,
    // borderRadius: FontSize.base,
    borderColor: "#EAECF0",
    justifyContent: "space-between",
    alignItems: 'center',
    marginVertical: 8
  },
  title: {
    // color: Colors.text,
    // fontFamily: Font['inter-medium'],
    // fontSize: FontSize.small
  },
})


