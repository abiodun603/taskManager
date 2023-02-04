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
import ChoosePilot from "../screens/ChoosePilotScreen";
import Header from "../components/shared/Header";
import PickPilot from "../screens/PickPilotScreen";
import SelectPlan from "../screens/SelectPlanScreen";
import Payment from "../screens/PaymentScreen";

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
    >
      <Stack.Screen name="CreateAccount" component={Create} options={{headerShown: false}} /> 
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/> 
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}}/>
      <Stack.Screen name="OtpScreen" component={OtpScreen} options={{headerShown: false}}/>  
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown: false}}/>  
      <Stack.Screen name="ResetSuccess" component={ResetSuccess} options={{headerShown: false}}/>  
      <Stack.Screen 
        name="ChoosePilot" 
        component={ChoosePilot} 
      
        options=  {
          ()=>{
            return { 
              headerTitle: () => <Header  /> 
            }
          } 
        }
      />  
        
      <Stack.Screen 
        name="PickPilot" 
        component={PickPilot} 
        options=  {
          ()=>{
            return { 
              headerTitle: () => <Header  /> 
            }
          } 
        }
      />  
      <Stack.Screen 
        name="SelectPlan" 
        component={SelectPlan} 
        options=  {
          ()=>{
            return { 
              headerTitle: () => <Header  /> 
            }
          } 
        }
      />
      <Stack.Screen 
        name="Payment" 
        component={Payment} 
        options=  {
          ()=>{
            return { 
              headerTitle: () => <Header  /> 
            }
          } 
        }
      />
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