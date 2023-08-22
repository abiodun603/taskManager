import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// ** Types
import { RootStackParamList } from "../../types";

// ** Layouts
import AuthHeader from "../../layouts/authHeader/AuthHeader";

// ** Constants 
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import Spacing from "../../constants/Spacing";

// ** Thired Party
import { FormProvider, useForm } from 'react-hook-form';
import { styled } from "nativewind";

// ** Hook
import { useAuth } from "../../hooks/useAuth";

// ** Component
import Input from "../../components/Input";
import Button from "../../components/CustomButton";


type Props = NativeStackScreenProps<RootStackParamList, "ResetPassword">;

interface UserData {
  new_password: string
  confirm_password: string
}

const defaultValues = {
  new_password: '',
  confirm_password: ''
}

const ForgetPassword: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const methods = useForm({defaultValues});

   // ** Hooks
   const auth = useAuth()

  const handleResetPassword = async (data: UserData) => {
    // const { email,  } = data
    // auth.forgetPass({ email }, () => {
      
    // })
    navigate("ResetSuccess") 
  };

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
        <AuthHeader 
          head= "Reset your Password"
          description="Secure your account by creating a password"
        />
          <FormProvider {...methods}>
            {/* ====== ======== */}
            <View style={{marginVertical: 20}} className="grow" >
              <Input
                label="Password"
                placeholder="Enter password"
                passwordIcon
                name="new_password"
                rules={{
                  required: 'Password is required',
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message: 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character'
                  }
                }}
              />
              <Input
                label="Confirm Password"
                placeholder="Confirm Password"
                passwordIcon
                name = "password_confirmation"
                rules={{
                  required: 'Password is required',
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message: 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character'
                  }
                }}
              />
            </View>
            <View>
            <View style={{ backgroundColor: "red"}} className="bg-red-800" />
              <Button title="Reset Password" onPress={methods.handleSubmit(handleResetPassword)} />
            </View>
          </FormProvider>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgetPassword

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