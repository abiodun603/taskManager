import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";
import Create from "../screens/Create";
import LoginScreen from "../screens/Login";
import ForgetPassword from "../screens/ForgetPasswordScreen";
import OtpScreen from "../screens/OtpScreen";
import ResetPassword from "../screens/ResetPasswordScreen";
import ResetSuccess from "../screens/ResetSuccess";
// import Registered from "../screens/Registered";
// import UnRegistered from "../screens/UnRegistered";
// import Reset from "../screens/Reset";
// import JoinMeeting from "../screens/JoinMeeting";
// import VerificationScreen from "../screens/VerficationScreen";
// import ChatScreen from "../screens/ChatScreen";
// import ActiveScreen from "../screens/ActiveScreen";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
 const Stack = createNativeStackNavigator<RootStackParamList>();
//  const Tab = createMaterialBottomTabNavigator();

 function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CreateAccount" component={Create} /> 
      <Stack.Screen name="Login" component={LoginScreen} /> 
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />  
      <Stack.Screen name="ResetPassword" component={ResetPassword} />  
      <Stack.Screen name="ResetSuccess" component={ResetSuccess} />  
      {/*<Stack.Screen name="Register" component={Registered} />  
      <Stack.Screen name="ResetPassword" component={Reset} />  
      <Stack.Screen name="JoinMeeting" component={JoinMeeting} />
      <Stack.Screen name="UnRegister" component={UnRegistered} /> */}
    </Stack.Navigator>
  );
}

// const Tab = createMaterialBottomTabNavigator();

// function SettingsStackScreen() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Active" component={ActiveScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }