import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: undefined;
  CreateAccount: undefined;
  ForgetPassword: undefined;
  OtpScreen: undefined;
  ResetPassword: undefined;
  ResetSuccess: undefined;
  ChoosePilot: undefined;
  PickPilot: undefined;
  SelectPlan: undefined;
  Payment: undefined;
  Active: undefined;
  CustomDrawer: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;