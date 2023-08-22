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
import { Box, Checkbox } from "native-base";
import { styled } from "nativewind";
type Props = NativeStackScreenProps<RootStackParamList, "SetPassword">;
const StyledView = styled(View)

const SetPassword: React.FC<Props> = ({ navigation: { navigate } }) => {
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
          head={`Setup your ${'\n'}Password`}
          description="Secure your account by creating a password"
          rightNavPress={() => navigate("Login")}
        />

        {/* Password  set up */}
        {/* <AuthHeader 
          rightNavigation = "Sign in"
          head={`Setup your ${'\n'}Password`}
          description="Secure your account by creating a password"
        /> */}
          
        {/* Email Verificaiton  set up */}
        {/* <AuthHeader 
          head={`Email Verification`}
          description="Secure your account by creating a password"
        /> */}
        {/* ====== ======== */}
        <View style={{marginVertical: 20}} className="grow" >
          {/* Email Address set up */}
          <Input
            label="Password"
            placeholder="Enter password"
            password
            passwordIcon
          />
          <Input
            label="Confirm Password"
            placeholder="Confirm password"
            password
            passwordIcon
          />
        </View>
        <View>
          <View style={{ backgroundColor: "red"}} className="bg-red-800" />
          <Button title="Sign Up" onPress={() => navigate("EmailVerification")} />
          <Text style={styles.text1}>
            By continuing, you agree to One Reach’s{'\n'} 
            <Text style={styles.text2}>Terms & Conditions</Text> and <Text style={styles.text2}>Privacy Policy.</Text>
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SetPassword

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