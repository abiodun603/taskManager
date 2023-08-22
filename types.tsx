import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Welcome: undefined,
  AccountOption: undefined,
  AccountSuccess: undefined,
  IdentifySuccess: undefined,
  Identification: undefined,
  Login: undefined;
  CreateAccount: undefined;
  SetPassword: undefined;
  EmailVerification: undefined;
  ForgetPassword: undefined;
  ResetCode: undefined;
  PdfPreview: undefined;
  OtpScreen: undefined;
  ResetPassword: undefined;
  ResetSuccess: undefined;
  ProfileNotification: undefined;
  ProfilePreview: undefined;
  EditProfile: undefined;
  Events: undefined;
  Resources: undefined;
  TopNavPanel: undefined;
  Settings:undefined;
  About: undefined;
  SavedItems: undefined;
  CommunityInvites: undefined;
  Notification: undefined;
  Message: undefined;
  Language: undefined;
  ViewResult: undefined;
  ChoosePilot: undefined;
  PickPilot: undefined;
  SelectPlan: undefined;
  Payment: undefined;
  Active: undefined;
  CustomDrawer: undefined;
  ViewMessage: undefined;
  NewMessage: undefined;
  RecentCalls: undefined;
  Call: undefined;
  Contact: undefined;
  AddContact: undefined;
  ViewContact: undefined;
  EditContact: undefined;
  Sip: undefined;
  Calendar: undefined;
  AddSip: undefined;
  Destination:undefined;
  AddDestination: undefined;
  Groups: undefined;
  AddGroups: undefined;
  Virtual: undefined;
  RouteVR: undefined;
  AddRoute: undefined;
  CallRoute: undefined;
  ConfigCalendar: undefined;
  OptCalendar: undefined;
  AccountSetting: undefined;
  CallFlow: undefined;
  Subscription: undefined;
  Account: undefined;
  BillDetails: undefined;
  AddPayment: undefined;
  PaymentSetting: undefined;
  SelectPilotType: undefined;
  GroupContact: undefined;
  EditGroup: undefined;
  Numbers: undefined;
  Verification: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;