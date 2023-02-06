import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import Spacing from "../../constants/Spacing";
type Props = NativeStackScreenProps<RootStackParamList, "ForgetPassword">;
import Ionicons from '@expo/vector-icons/Ionicons';


const ForgetPassword: React.FC<Props> = ({ navigation: { navigate }}) => {
  return (
    <SafeAreaView>
      <ScrollView 
        contentContainerStyle={{
          padding: 20,
          paddingHorizontal: 20
        }}
      >
        {/* ====== ======== */}
        <Header 
          title="Forgot Pin?"
          description="No worries, we’ll send you reset instructions"
        />
        {/* ====== ======== */}
        <View style={{marginVertical: 20}}>
          <Input
            label="Phone number"
            placeholder="Enter your phone number"
          />

          <View style={{marginTop: Spacing*2}} />
          <Button title="Reset PIN" onPress={() => navigate("OtpScreen")} />
        </View>

        {/* ===== ======== */}
        <TouchableOpacity onPress={() => navigate("Login")} style={{marginTop: Spacing, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          {/* icon */}
          <Ionicons name="ios-arrow-back" size={20} color="#000000" />
          <Text style={{color: Colors.text, fontFamily: Font["inter-regular"], fontSize: FontSize.small}}>Back to log in</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgetPassword
