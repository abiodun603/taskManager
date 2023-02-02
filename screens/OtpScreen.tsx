import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from 'react'
import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Input from "../components/Input";
import Button from "../components/Button";
import Header from "../components/Header";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
type Props = NativeStackScreenProps<RootStackParamList, "OtpScreen">;
import Ionicons from '@expo/vector-icons/Ionicons';


const OtpScreen: React.FC<Props> = ({ navigation: { navigate }}) => {
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
          title="Check your inbox"
          description="We sent a reset code to you."
        />
        {/* ====== ======== */}
        <View style={{marginVertical: 20}}>
          <Input
            label="Reset Code"
            placeholder="Enter your reset code"
          />

          <View style={{marginTop: Spacing*2}} />
          <Button title="Proceed" onPress={() => navigate('ResetPassword')} />
        </View>
        {/* ===== ======= */}
        <Text style={styles.text3}>Didn’t receive a code?<Text style={styles.text4} > Click to resend</Text>.</Text>

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

export default OtpScreen


const styles = StyleSheet.create({
  text3: {
    color: Colors.text,
    fontSize: FontSize.small,
    fontFamily: Font["inter-regular"],
    textAlign: "center",
    marginVertical: Spacing * 1.5
  },
  text4: {
    color: Colors.primary
  },
})