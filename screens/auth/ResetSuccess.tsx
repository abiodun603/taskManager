import {
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../../components/Button";
import Header from "../../components/AuthHeader";
import Spacing from "../../constants/Spacing";
type Props = NativeStackScreenProps<RootStackParamList, "ResetSuccess">;


const ResetSuccess: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

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
          title="Password reset"
          description="Your Password has been successfully reset. Tap Continue to log in."
        />
        {/* ====== ======== */}
        <View style={{marginVertical: 20}}>
          <View style={{marginTop: Spacing*2}} />
          <Button title="Continue" onPress={() => navigate('ChoosePilot')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResetSuccess
