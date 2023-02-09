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
import Button from "../../components/Button";
import Header from "../../components/AuthHeader";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import Spacing from "../../constants/Spacing";
type Props = NativeStackScreenProps<RootStackParamList, "Login">;


const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

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
          title="Welcome back"
          description="Enter your log in details."
        />
        {/* ====== ======== */}
        <View style={{marginVertical: 20}}>
          <Input
            label="Phone number"
            placeholder="Enter your phone number"
          />
          <Input
            label="Password"
            placeholder="Enter your Password"
            password
            passwordIcon
          />
           <Input
            label="Account"
            placeholder="Enter your account name"
          />
          {/* <Input
            label="Phone number"
            placeholder="Enter your phone number"
          /> */}
          {/* remember me & forget password */}
          <View style={styles.forgetPassword}>
            <View style={{flex: 1, marginRight: -20}}>
              <View>
                <Text
                  style={{
                    color: Colors.gray,
                    fontSize: FontSize.small,
                    fontFamily:Font["inter-regular"],
                  }}
                >Remember Me</Text>
              </View>
            </View>
            <Text
             style={{
              textAlign:"right",
              color: Colors.primary,
              fontSize: FontSize.small,
              fontFamily:Font["inter-regular"],
            }}
            onPress={() => navigate('ForgetPassword')}
            >Forget Password?</Text>
          </View>

          <View style={{marginTop: Spacing*2}} />
          <Button title="Sign in" onPress={() => navigate("ChoosePilot")} />

          <Text style={styles.text3}>Don’t have an account?<Text style={styles.text4} onPress={() => navigate("CreateAccount")} > Sign up</Text>.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

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
    textDecorationLine: "underline"
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