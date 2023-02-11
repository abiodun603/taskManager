import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Layout from '../../components/shared/Layout';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import {MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 
import Input from '../../components/Input';
import ChatTab from '../../components/ChatTab';
type Props = NativeStackScreenProps<RootStackParamList, "NewMessage">;

const w = Dimensions.get('window').width

const MessageCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.messageText}>
        Hello, kindly provide an estimate for 50 bags of Perfro oil seeds. Thank you.
      </Text>
      <Text style={[styles.time, {textAlign: "right"}]}>16:30</Text>
    </View> 
  )
}

const NewMessage: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout 
      title = "New Message"
      // iconButton
      // onPress={()=> navigate("NewMessage")}
    >
      <View style={styles.container}>
        {/*  */}
        <Input placeholder='Recipient' />
        {/*  */}
        {/* ====== Chat Input Field ====== */}
        <ChatTab/>
      </View>
    </Layout>
  )
}

export default NewMessage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
  time: {
    fontSize: FontSize.xsmall,
    fontFamily: Font['inter-regular'],
    color: Colors.gray,
    marginBottom: 25
  },

  // messageCard
  cardContainer: {
    position: "relative",
    width: 232,
    height: 90,
    padding: 10,
    backgroundColor: "#F5E5F5",
    borderTopRightRadius: FontSize.base,
    borderBottomLeftRadius: FontSize.base,
    borderBottomRightRadius: FontSize.base,
  },
  messageText: {
    color: Colors.text,
    fontFamily: Font['inter-regular'],
    fontSize: FontSize.small
  },
  chatInputFieldContainer:{
    width: w*1,
    position: 'absolute', 
    bottom: 0, 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
})