import { Platform, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import Ionicons from "@expo/vector-icons/Ionicons"
import Button from '../../components/CustomButton';
import Spacing from '../../constants/Spacing';
import Layout from '../../layouts/Layout';
type Props = NativeStackScreenProps<RootStackParamList, "SelectPlan">;

const PlanList = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: "center", marginVertical:5}}>
      <View style={styles.checkButton}>
        <Ionicons name="checkmark" size={15} color={Colors.primary} />
      </View>
      {/* name */}
      <Text style= {{fontSize: FontSize.small, fontFamily: Font['inter-regular'], color: Colors.gray  }}> Voicemail To Email</Text>

    </View>
  )
}

const Plan = () => {
  return (
    <View style={[styles.planContainer]}>
      {/* plan name */}
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'space-between'}}>
        <Text style={{color: Colors.gray, fontFamily: Font["inter-regular"], fontSize: 16}}>
          Basic
        </Text>

        {/* badge */}
        <View style={styles.badge}>
          <Text style={{color: Colors.primary, fontFamily: Font["inter-medium"], fontSize: 12}}>Popular</Text>
        </View>
      </View>
      {/* pricing */}
      <Text style={{color: Colors.darkBlue, fontFamily: Font["inter-bold"], fontSize: 27, marginVertical: 15}}>
        ₦1,500 <Text style={{color: Colors.text, fontSize: FontSize.small, fontFamily: Font['inter-regular']}}>per month</Text>
      </Text>
      {/* list */}
      <PlanList/>
      <PlanList/>
      <PlanList/>
      <PlanList/>

      <View style={{marginTop: Spacing*1.5}} />
      {/* button */}
      <Button title="Select Plan" onPress={() => null} />

    </View>
  )
}

const SelectPlan: React.FC<Props> = ({ navigation: {navigate}}) => {
  const [switchValue, setSwitchValue] = useState(false); 

  const toggleSwitch = (value: boolean) => {
    setSwitchValue(value);
  }

  return (
    <Layout 
      title='Select your One Reach plan'
    >
      <View style={[styles.selectPlanContainer]}>
        <Text
          style={{
            fontSize: FontSize.small,
            fontFamily: Font["inter-regular"],
            color: Colors.gray,
            textAlign: "center",
            paddingHorizontal: 52
          }}
        >
          Your account will not be debited until your 7-day free trial elapses. You cancel anytime.
        </Text>
        
        <View style={{marginVertical: 20, flexDirection: "row", alignItems: "center"}}>
          <Text
            style={{
              color: Colors.primary,
              fontSize: FontSize.small,
              fontFamily: Font["inter-medium"],
              marginRight: 5
            }}
            >Annual pricing 
            <Text 
              style={{
                color: Colors.gray,
                fontSize: FontSize.small,
                fontFamily: Font["inter-medium"],
              }}> (save 20%)</Text>
          </Text>
          <Switch 
            onValueChange={toggleSwitch}
            value={switchValue}
            trackColor={{false: '#767577', true: Colors.primary}}
          />
        </View>
        {/* ====== Plans Options ========= */}
        <Plan />

        {/* ====== Skip Button ========= */}
        <TouchableOpacity
          onPress={() => navigate("Payment")}
          style={styles.skipButton}
        >
          <Text style={{color: Colors.gray, fontSize: 16, fontFamily: Font["inter-medium"]}}>Skip for now</Text>
        </TouchableOpacity>
        
      </View>
    </Layout>
  )
}

export default SelectPlan



const styles = StyleSheet.create({
  selectPlanContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 50,
    alignItems: 'center',
    width: "100%"
  },
  planContainer: {
    borderRadius: 8,
    height: 340,
    width: "100%",
    borderWidth: .2,
    padding: 30
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  badge: {
    width: 68,
    height: 28,
    backgroundColor: '#F5E5F5',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5E5F5',
    borderRadius: 50,
  },
  skipButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: "transparent",
    borderRadius: 8,
    borderWidth: 1,
    height: 44,
    width: "100%",
    borderColor: '#B3B3B3',
    color: Colors.text,
    alignItems: 'center',
    justifyContent: 'center'
  }
})