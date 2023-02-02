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
  UnRegister: undefined;
  JoinMeeting: undefined;
  Verification: undefined;
  Chat: undefined;
  Active: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;