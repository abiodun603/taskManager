import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import Spacing from "../../constants/Spacing";
type Props = NativeStackScreenProps<RootStackParamList, "ResetPassword">;
import Ionicons from '@expo/vector-icons/Ionicons';


const ResetPassword: React.FC<Props> = ({ navigation: { navigate }}) => {
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
          title="Set new password"
          description="Your new PIN must be different from previously used PINs."
        />
        {/* ====== ======== */}
        <View style={{marginVertical: 20}}>
          <Input
            label="PIN"
            placeholder="Create a pin"
          />

          <Input
            label="Confirm PIN"
            placeholder="Retype new PIN"
          />

          <View style={{marginTop: Spacing*2}} />
          <Button title="Reset PIN" onPress={() => navigate('ResetSuccess')} />
        </View>

        {/* ===== ======== */}
        <TouchableOpacity onPress={() => navigate("Login")} style={{marginTop: Spacing, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          {/* icon */}
          <Ionicons name="ios-arrow-back" size={20} color="#000000" />
          <Text style={{color: Colors.text, fontFamily: Font["inter-regular"], fontSize: FontSize.small}}>Back to log in</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResetPassword


const styles = StyleSheet.create({
  text3: {
    color: Colors.text,
    fontSize: FontSize.small,
    fontFamily: Font["inter-regular"],
    textAlign: "center",
    marginVertical: Spacing * 1.5
  },
  text4: {
    color: Colors.primary
  },
})