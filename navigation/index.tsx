import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";
import Create from "../screens/auth/Create";
import LoginScreen from "../screens/auth/Login";
import ForgetPassword from "../screens/auth/ForgetPasswordScreen";
import OtpScreen from "../screens/auth/OtpScreen";
import ResetPassword from "../screens/auth/ResetPasswordScreen";
import ResetSuccess from "../screens/auth/ResetSuccess";
import ChoosePilot from "../screens/registration/ChoosePilotScreen";
import PickPilot from "../screens/registration/PickPilotScreen";
import SelectPlan from "../screens/registration/SelectPlanScreen";
import Payment from "../screens/registration/PaymentScreen";
import CustomDrawer from "./CustomDrawer";
import ViewMessage from "../screens/messages/ViewMessage";
import NewMessage from "../screens/messages/NewMessage";
import RecentCalls from "../screens/RecentCalls";
import Call from "../screens/call/Call";
import Contact from "../screens/contact/Contact";
import AddContact from "../screens/contact/AddContact";
import ViewContact from "../screens/contact/ViewContact";
import EditContact from "../screens/contact/EditContact";
import Sip from "../screens/sip/Sip";
import Calendar from "../screens/calendar/Calendar";
import AddSip from "../screens/sip/AddSip";
import Destination from "../screens/destination/Destination";
import AddDestination from "../screens/destination/AddDestination";
import Groups from "../screens/groups/Groups";
import AddGroups from "../screens/groups/AddGroups";
import Virtual from "../screens/virtual/Visual";
import RouteVr from "../screens/virtual/RouteVr";
import AddRoute from "../screens/virtual/AddRoute";
import CallRoute from "../screens/call/CallRoute";
import ConfigCalendar from "../screens/calendar/ConfigCalendar";
import OptCalendar from "../screens/calendar/OptCalandar";
import AccountSetting from "../screens/account/AccountSetting";
import CallFlow from "../screens/call/CallFlow";
import Subscription from "../screens/account/Subscription";
import Account from "../screens/account/Account";
import BillDetails from "../screens/bill/BillDetails";
import AddPayment from "../screens/payment/AddPayment";
import PaymentSetting from "../screens/payment/PaymentSetting";
import SelectPilotType from "../screens/registration/SelectPilotType";
import GroupContact from "../screens/contact/GroupContact";
import EditGroup from "../screens/contact/EditGroup";
import Numbers from "../screens/contact/Numbers";
import Verification from "../screens/auth/VerficationCode";
import Welcome from "../screens/onboard/Welcome";
import AccountOption from "../screens/auth/AccountOption";
import ResetCode from "../screens/auth/ResetCode";
import AccountSuccess from "../screens/auth/AccountSuccess";
import IdentifySuccess from "../screens/auth/IdentifySuccess";
import ProfileNotification from "../screens/profile/profileNotification";
import ProfilePreview from "../screens/profile/ProfilePreview";
import EditProfile from "../screens/profile/EditProfile";
import Events from "../screens/events/Events";
import Resources from "../screens/resources/Resources";
import Settings from "../screens/settings/Settings";
import About from "../screens/about/About";
import Language from "../screens/language/Language";
import SavedItems from "../screens/savedItems/SavedItems";
import CommunityInvites from "../screens/community/CommunityInvites";
import SetPassword from "../screens/auth/SetPassword";
import EmailVerification from "../screens/auth/EmailVerification";
import Preview from "../screens/pdf/Preview";
import Messages from "../screens/messages/Messages";
import Notification from "../screens/notification/Notification";
import Identification from "../screens/auth/Identification";
import Role from "../screens/identification/Role";
import TopNavPanel from "./TopTabs";
import { AuthProvider } from "../contexts/AuthContext";

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
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
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
      screenOptions={{headerShown: false}}
    
    >
      <Stack.Screen name="Welcome" component={Welcome} /> 
      <Stack.Screen name="ProfileNotification" component={ProfileNotification} /> 
      <Stack.Screen name="ProfilePreview" component={ProfilePreview} /> 
      <Stack.Screen name="EditProfile" component={EditProfile} /> 
      <Stack.Screen name="Events" component={Events} /> 
      <Stack.Screen name="Resources" component={Resources} /> 
      <Stack.Screen name="Settings" component={Settings} /> 
      <Stack.Screen name="About" component={About} /> 
      <Stack.Screen name="Language" component={Language} /> 
      <Stack.Screen name="SavedItems" component={SavedItems} /> 
      <Stack.Screen name="CommunityInvites" component={CommunityInvites} /> 
      <Stack.Screen name="SetPassword" component={SetPassword} /> 
      <Stack.Screen name="EmailVerification" component={EmailVerification} /> 
      <Stack.Screen name="AccountOption" component={AccountOption} /> 
      <Stack.Screen name="CreateAccount" component={Create} /> 
      <Stack.Screen name="AccountSuccess" component={AccountSuccess} /> 
      <Stack.Screen name="IdentifySuccess" component={IdentifySuccess} /> 
      <Stack.Screen name="Login" component={LoginScreen}/> 
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
      <Stack.Screen name="ResetCode" component={ResetCode} />
      <Stack.Screen name="OtpScreen" component={OtpScreen}/>  
      <Stack.Screen name="ResetPassword" component={ResetPassword} />  
      <Stack.Screen name="ResetSuccess" component={ResetSuccess}/>  
      <Stack.Screen name="PdfPreview" component={Preview}/>
      <Stack.Screen name="Notification" component={Notification}/>
      <Stack.Screen name="Identification" component={Identification}/>
      {/* <Stack.Screen name="TopNavPanel" component={TopNavPanel}/> */}


      <Stack.Screen name="ChoosePilot" component={ChoosePilot} />  
      <Stack.Screen name="PickPilot" component={PickPilot} />  
      <Stack.Screen name="SelectPlan" component={SelectPlan} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="CustomDrawer" component={CustomDrawer} />  
      <Stack.Screen name="ViewMessage" component={ViewMessage} />  
      <Stack.Screen name="NewMessage" component={NewMessage} />   
      <Stack.Screen name="RecentCalls" component={RecentCalls} />   
      <Stack.Screen name="Call" component={Call} />   
      <Stack.Screen name="Contact" component={Contact} /> 
      <Stack.Screen name="AddContact" component={AddContact} />  
      <Stack.Screen name="ViewContact" component={ViewContact} />  
      <Stack.Screen name="EditContact" component={EditContact} /> 
      <Stack.Screen name="Sip" component={Sip} /> 
      <Stack.Screen name="AddSip" component={AddSip} /> 
      <Stack.Screen name="Destination" component={Destination} /> 
      <Stack.Screen name="AddDestination" component={AddDestination} />
      <Stack.Screen name="Groups" component={Groups} /> 
      <Stack.Screen name="AddGroups" component={AddGroups} />
      <Stack.Screen name="Calendar" component={Calendar} /> 
      <Stack.Screen name="Virtual" component={Virtual} /> 
      <Stack.Screen name="RouteVR" component={RouteVr} /> 
      <Stack.Screen name="AddRoute" component={AddRoute} /> 
      <Stack.Screen name="CallRoute" component={CallRoute} /> 
      <Stack.Screen name="ConfigCalendar" component={ConfigCalendar} /> 
      <Stack.Screen name="OptCalendar" component={OptCalendar} /> 
      <Stack.Screen name="AccountSetting" component={AccountSetting} /> 
      <Stack.Screen name="CallFlow" component={CallFlow} /> 
      <Stack.Screen name="Subscription" component={Subscription} /> 
      <Stack.Screen name="Account" component={Account} /> 
      <Stack.Screen name="BillDetails" component={BillDetails} /> 
      <Stack.Screen name="AddPayment" component={AddPayment} /> 
      <Stack.Screen name="PaymentSetting" component={PaymentSetting} /> 
      <Stack.Screen name="SelectPilotType" component={SelectPilotType} /> 
      <Stack.Screen name="GroupContact" component={GroupContact} /> 
      <Stack.Screen name="EditGroup" component={EditGroup} /> 
      <Stack.Screen name="Numbers" component={Numbers} /> 
      <Stack.Screen name="Verification" component={Verification} /> 
    </Stack.Navigator>
  );
}

