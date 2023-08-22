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


// ** Thired Party
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Checkbox } from "native-base";
import { styled } from "nativewind";

// ** Hook
import { useAuth } from "../../hooks/useAuth";


type Props = NativeStackScreenProps<RootStackParamList, "Login">;
const StyledView = styled(View)

const defaultValues = {
  email: 'steve7@app.com',
  password: 'passcode'
}

interface UserData {
  email: string
  password: string
}

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const methods = useForm({defaultValues});

   // ** Hooks
   const auth = useAuth()


  const handleLogin = (data: UserData) => {
    // Handle login logic here
    console.log(data);
    const { email, password } = data
    auth.login({ email, password }, () => {
      
    })
    navigate("CustomDrawer")
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
          rightNavigation = "Sign up"
          rightNavPress={() => navigate("AccountOption")}
        />
          <FormProvider {...methods}>
            {/* ====== ======== */}
            <View style={{marginVertical: 20}} className="grow" >
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
                  // pattern: {
                  //   value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  //   message: 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character'
                  // }
                }}
              />

              {/* remember me & forget password */}
              <View style={styles.forgetPassword}>
                <View style={{flex: 1, marginRight: -20}}>
                  <View className="flex flex-row items-center space-x-2">
                    <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" colorScheme="pink" />
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
                  color: Colors.secondary,
                  fontSize: FontSize.small,
                  fontFamily:Font["inter-regular"],
                }}
                onPress={() => navigate('ForgetPassword')}
                >Forgot Password?</Text>
              </View>
            
            </View>
            <View>
              <View style={{ backgroundColor: "red"}} className="bg-red-800" />
              <Button 
                title="Sign in" 
                onPress={methods.handleSubmit(handleLogin)}              
              />
              <Text style={styles.text3}>Or sign in with</Text>
              <StyledView className="flex flex-row  justify-center space-x-2 mt-6">
                <Box className=" text-black">
                  <Button
                    title='Google'
                    buttonStyle={{backgroundColor: 'transparent', borderColor: "#B3B3B3", borderWidth: 1, width: 117}}
                    titleColor= {Colors.secondary}

                  />
                </Box>
                <Box className=" text-black">
                  <Button
                    title='Apple'
                    buttonStyle={{backgroundColor: 'transparent', borderColor: "#B3B3B3", borderWidth: 1, width: 117}}
                    titleColor= {Colors.secondary}

                  />
                </Box>
              </StyledView>
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
    marginVertical: Spacing
  }
})