import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// ** Constants 
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import Spacing from "../../constants/Spacing";

// ** Thired Party
import { FormProvider, useForm } from 'react-hook-form';

// ** Types 
import { RootStackParamList } from "../../types";

// ** Components
import Input from "../../components/Input";
import AuthHeader from "../../layouts/authHeader/AuthHeader";
import CustomButton from "../../components/CustomButton";



type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const defaultValues = {
  email: '',
  password: ''
}

interface UserData {
  email: string
  password: string
}

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const methods = useForm({defaultValues});

  const handleLogin = (data: UserData) => {
    const { email, password } = data

    navigate("TaskScreen")
    methods.reset()

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
          title="Welcome bank"
        />
          <FormProvider {...methods}>
            {/* ====== ======== */}
            <View  className="grow mt-9" >
              <Input
                label="Email"
                placeholder="Enter email address"
                name='email'
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                }}
              />
              <Input
                label="Password"
                placeholder="Enter password"
                name="password"
                password
                passwordIcon
                rules={{
                  required: 'Password is required',
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message: 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character'
                  }
                }}
              />
              <CustomButton 
                title="Sign in" 
                onPress={methods.handleSubmit(handleLogin)}  
                buttonStyle={{marginTop: 20}}            
              />
            </View>
          </FormProvider>
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
    justifyContent: "space-between",
    marginVertical: Spacing
  }
})