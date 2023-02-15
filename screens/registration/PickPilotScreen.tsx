import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Ionicons from '@expo/vector-icons/Ionicons';
import Spacing from '../../constants/Spacing';
import Button from '../../components/CustomButton';
import Layout from '../../layouts/Layout';
type Props = NativeStackScreenProps<RootStackParamList, "PickPilot">;
const h = Dimensions.get("window").height

const PickPilot: React.FC<Props> = ({ navigation}) => {
  return (
    <Layout
      title='Pick your One Reach number'
    >
      <View style={styles.pickPilotContainer}>
        <View>
          <Text
            style={{
              color: Colors.darkBlue,
              fontSize: FontSize.large,
              fontFamily: Font["inter-medium"],
              textAlign: "center"
            }}
          >That’s a lovely number!</Text>

          <Text
            style={{
              color: Colors.gray,
              fontSize: FontSize.small,
              fontFamily: Font["inter-regular"],
              marginVertical: 10
            }}
          >
            Just confirm your choice and it’s all yours.
          </Text>
        </View>
          {/* ===== ====== */}
        <Text
        style={{
          color: Colors.text,
          fontSize: 24,
          fontFamily: Font["inter-semiBold"],
        }}
        >
          +1-202-555-0136
        </Text>

        <View style={{width: "100%"}}>
          <Button title="Choose this number" onPress={() => navigation.navigate('SelectPlan')} />
          {/* ===== ======== */}
          <TouchableOpacity onPress={() => navigation.goBack() } style={{marginTop: Spacing, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            {/* icon */}
            <Ionicons name="ios-arrow-back" size={20} color="#000000" />
            <Text style={{color: Colors.text, fontFamily: Font["inter-regular"], fontSize: FontSize.small}}>Pick another number</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

export default PickPilot

const styles = StyleSheet.create({
  pickPilotContainer: { 
    paddingHorizontal: 15,
    paddingVertical: 50,
    alignItems: 'center',
    height: h - 300,
    justifyContent: 'space-between',
    width: "100%"
  }
})