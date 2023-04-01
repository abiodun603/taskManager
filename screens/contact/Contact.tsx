import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import Font from '../../constants/Font';
import FontSize from '../../constants/FontSize';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Colors from '../../constants/Colors';
import {  Divider } from 'native-base';
import { styled } from 'nativewind';
type Props = NativeStackScreenProps<RootStackParamList, "Contact">;
const StyledView = styled(View)

const DATA = [
  {
    id: 1,
    name: "Developers",
    location: "Lagos",
    image: "data:image/jpeg;base64,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",
    members: ["Madam Uti, Senetor"]
  },
  {
    id: 2,
    name: "Food Vendors",
    location: "Miami",
    image: "data:image/jpeg;base64,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",
    members: ["Chidozie, Olamide"]
  },
]


const ContactGroupsData = [
  {
    id: 1,
    name: "Dele Fekinz",
   phone: "253 892 9000"
  },
  {
    id: 2,
    name: "Jane Ngozi",
    phone: "112 346"
  },
  {
    id: 3,
    name: "Isaac & Co.",
    phone: "01 392 9011"
  },
  {
    id: 4,
    name: "Kevin Kastor",
    phone: "321 344 6000"
  },
  {
    id:5,
    name: "Toyosi Afolabi",
    phone: "253 892 9234"
  },
]

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

const Badge = ({title}: {title: string | boolean}) => {
  return (
    <View style={styles.badgeContainer}>
      <Text style={{fontFamily: Font['inter-regular'], color: Colors.background, fontSize: FontSize.xsmall}}>{title}</Text>
    </View>
  )
}

export const MessageCard: React.FC<MessageCardProps> = ({name , location, group, phone, iconName, iconColor, onPress=()=>{}, divider}) => {
  return(
    <TouchableOpacity 
      onPress={onPress }
      style={styles.cardContainer}>
        <View style={{flexDirection: "row"}}>
          <View style={styles.circleImage}>
            <FontAwesome5 name = "user-alt" size={18} color="#FFFFFF" />
          </View>
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

            <View className='flex flex-row space-x-2'>
              {
                group?.slice(0, 2).map((item, i) => {
                  let count = 0

                  return (
                    <Text key={i} style={styles.description} className='mt-1'>{item}</Text>
                  )
                })
              }
              {phone && <Text style={styles.description} className='mt-1'>{phone}</Text>}
            </View>
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

const Contact: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title='Contacts'
      rightNavigation="Add"
      rightNavPress={()=> navigate("Groups")}
    >
      <View
        style={styles.container}
      >
        {/* contact groups */}
        <Text style={[styles.description]}>Contact groups</Text>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={
            ({item}) => 
              <MessageCard  
                name = {item.name}
                location={item.location}
                group ={item.members}
                onPress={() => navigate("GroupContact")}
                divider
            /> 
          }        
        />

        {/* contacts */}
        <Text style={[styles.description, , {marginTop: 20}]}>Contacts</Text>
        <FlatList
          data={ContactGroupsData}
          keyExtractor={item => item.id.toString()}
          renderItem={
            ({item}) => 
              <MessageCard  
                name = {item.name}
                phone = {item.phone}
                onPress={() => navigate("ViewContact")}
            /> 
          }
        />
      </View>
    </Layout>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  description: {
    fontFamily: Font['inter-regular'],
    fontSize: FontSize.xsmall,
    color: Colors.gray,
    marginBottom: 8
  },

  // messsageCard
   cardContainer: {
    display: 'flex',
    width: "100%",
    height: 63,
    flexDirection: "row",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: FontSize.base,
    borderColor: "#EAECF0",
    justifyContent: "space-between",
    alignItems: 'center',
    marginVertical: 8
  },
  circleImage: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: FontSize.large,
    backgroundColor: "#E5E5E5"
  },
  title: {
    color: Colors.text,
    fontFamily: Font['inter-medium'],
    fontSize: FontSize.small
  },
  badgeContainer: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: FontSize.xxLarge,
  }
})