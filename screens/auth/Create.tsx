import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Input from "../../components/Input";
import Header from "../../layouts/authHeader/AuthHeader";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import Spacing from "../../constants/Spacing";
import CustomButton from "../../components/CustomButton";
type Props = NativeStackScreenProps<RootStackParamList, "CreateAccount">;


const Create: React.FC<Props> = ({ navigation: { navigate } }) => {
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
          title="Create an account"
          description="Start your 7-day free trial."
        />
        {/* ====== ======== */}
        <View style={{marginVertical: 20}}>
          <Input
            label="Phone number"
            placeholder="Enter your phone number"
          />
          <Input
            label="Password"
            placeholder="Create a Password"
            password
            passwordIcon
          />
          <View style={{marginTop: Spacing*2}} />
          <CustomButton title="Sign up" onPress={() => navigate('Login')} />

          <Text style={styles.text1}>
            By continuing, you agree to One Reach’s{'\n'} 
            <Text style={styles.text2}>Terms & Conditions</Text> and <Text style={styles.text2}>Privacy Policy.</Text>
          </Text>

          <Text style={styles.text3}>Already have an account? <Text style={styles.text4} >Log in</Text>.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create

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
  },
  text4: {
    color: Colors.primary
  }
})