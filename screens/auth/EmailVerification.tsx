import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Input from "../../components/Input";
import Button from "../../components/CustomButton";
import AuthHeader from "../../layouts/authHeader/AuthHeader";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import Spacing from "../../constants/Spacing";
import { styled } from "nativewind";
type Props = NativeStackScreenProps<RootStackParamList, "EmailVerification">;
const StyledView = styled(View)

const EmailVerification: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView 
        contentContainerStyle={{
          padding: 20,
          paddingHorizontal: 20,
          flex: 1
        }}
      >
        {/* ====== ======== */}
        {/* Email Address set up */}
        <AuthHeader 
          rightNavigation = "Sign in"
          head={`Email Verification`}
          description="Secure your account by creating a password"
          rightNavPress={() => navigate("Login")}

        />
        {/* ====== ======== */}
        <View style={{marginVertical: 20}} className="grow" >
          {/* Email Address set up */}
          <Input
            label="Confirmation code"
            placeholder="Enter confirmation code"
            password
            passwordIcon
          />

          <Text className="text-center text-[#6E5868] text-[16px] font-medium">Didn't get confirmation code? <Text className="text-black underline">Resend</Text></Text>
        </View>
        <View>
          <View style={{ backgroundColor: "red"}} className="bg-red-800" />
            <Button title="Submit" onPress={() => navigate("AccountSuccess")} />
          <Text style={styles.text1}>
            By continuing, you agree to One Reach’s{'\n'} 
            <Text style={styles.text2}>Terms & Conditions</Text> and <Text style={styles.text2}>Privacy Policy.</Text>
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EmailVerification

const styles = StyleSheet.create({
  text1: {
    fontSize: FontSize.small,
    color: Colors.gray,
    fontFamily:Font["inter-regular"],
    textAlign: "center",
    lineHeight:25,
    marginVertical :20
  },

  text2: {
    color: Colors.primary,
    textDecorationColor: Colors.primary,
  },

  text3: {
    color: Colors.text,
    fontSize: FontSize.small,
    fontFamily: Font["inter-regular"],
    textAlign: "center",
    marginTop: Spacing * 2
  },
  text4: {
    color: Colors.primary
  },
  forgetPassword: {
    flexDirection: "row",
    marginVertical: Spacing
  }
})