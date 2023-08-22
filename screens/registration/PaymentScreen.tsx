import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import FontSize from '../../constants/FontSize'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Input from '../../components/Input'
import Button from '../../components/CustomButton'
import Layout from '../../layouts/Layout'
type Props = NativeStackScreenProps<RootStackParamList, "Payment">;

const Payment: React.FC<Props> = ({ navigation: {navigate}}) => {
  return (
    <Layout
      title='Enter your details'
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        style={styles.paymentContainer}>
        {/*====== FORM  ===========*/}
        <View>
          <Text style={{color: Colors.gray, fontFamily: Font['inter-regular'], fontSize: FontSize.small}}>Account Information</Text>
          <View style={{marginVertical: 10}} />
          <Input
            label="First Name"
            placeholder="Enter your first name"
          />
          <Input
            label="Last Name"
            placeholder="Enter your last name"
          />
          <Input
            label="Contact Phone Number"
            placeholder="Enter your contact number"
          />
          <Input
            label="Company Name"
            placeholder="Enter your company name"
          />

          <Input
            label="Welcome Message"
            placeholder="Enter your company name"
          />  

         
          <Text style={{color: Colors.gray, fontFamily: Font['inter-regular'], fontSize: FontSize.small}}>Summary</Text>
          <View style={{marginVertical: 10}} />
          <Input
            label="One Reach Number"
            placeholder="+1-202-555-0136"
          />
          <Input
            label="One Reach Plan"
            placeholder="No plan selected"
          />
          
          <View style={{marginVertical: 10}} />
          <Button title="Activate your account" onPress={() => navigate("CustomDrawer")} />
        </View>
        {/* plan */}
      </ScrollView>
    </Layout>
  )
}

export default Payment

const styles = StyleSheet.create({
  paymentContainer: { 
    flex: 1,
    paddingHorizontal: 30,
    marginBottom: 40
  }
})