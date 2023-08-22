import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {StyleSheet, Text, View } from 'react-native';
import Layout from '../../layouts/Layout';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import ChatTab from '../../components/ChatTab';
type Props = NativeStackScreenProps<RootStackParamList, "ViewMessage">;


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

const ViewMessage: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout 
      title = "Jane Ngozi"
      onPress={()=> navigate("NewMessage")}
      extraOneIcon="call-outline"
    >
      <View style={styles.container}>
        {/* time */}
        <Text style={[styles.time, {textAlign: 'center'}]}>Today</Text>

        {/*  */}
        <MessageCard />

        {/*  */}
        <ChatTab/>
      </View>
    </Layout>
  )
}

export default ViewMessage

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
})