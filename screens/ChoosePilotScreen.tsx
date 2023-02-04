import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Font from '../constants/Font';
import FontSize from '../constants/FontSize';
import Colors from '../constants/Colors';
type Props = NativeStackScreenProps<RootStackParamList, "ChoosePilot">;


interface pilotProps  {
  pilotNumber: string;
  onPress?: ()=>void;
}

const DATA = [
  {
    id: '1',
    pilot:  '+1-202-555-0136',
  },
  {
    id: '2',
    pilot:  '+1-202-555-0136',
  },
  {
    id: '3',
    pilot:  '+1-202-555-0136',
  },
  {
    id: '4',
    pilot:  '+1-202-555-0136',
  },
  {
    id: '5',
    pilot:  '+1-202-555-0136',
  },
  {
    id: '6',
    pilot:  '+1-202-555-0136',
  },
  {
    id: '7',
    pilot:  '+1-202-555-0136',
  },

  {
    id: '8',
    pilot:  '+1-202-555-0136',
  },
  {
    id: '9',
    pilot:  '+1-202-555-0136',
  },
  {
    id: '10',
    pilot:  '+1-202-555-0136',
  },
];

const PilotNumber = ({pilotNumber, onPress=()=>{}}: pilotProps) => {
  return (
    <TouchableOpacity  onPress={onPress} style={styles.pilotContainer}>
      {/* action icons */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons
          name= "ios-call-outline"
          color="#BFBFBF"
          size={24}
        />
        <Text style={{fontFamily: Font["inter-medium"], fontSize: FontSize.small, color: Colors.gray, marginLeft: 10}}>{pilotNumber}</Text>
      </View>    
      <MaterialIcons
        name= "keyboard-arrow-right"
        color="#BFBFBF"
        size={25}
      />
    </TouchableOpacity>
  );
}

const ChoosePilot: React.FC<Props> = ({ navigation: { navigate }}) => {
  return (
    <View style={{padding: 15,}}>
       {/* ====== Participant List =====*/}
       <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PilotNumber pilotNumber={item.pilot} onPress={() => navigate("PickPilot")} /> }
        />
    </View>
  )
}

export default ChoosePilot

const styles = StyleSheet.create({
  pilotContainer: {
    width: '100%',
    height: 48,
    borderColor: "#BFBFBF",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginVertical: 10
  },

})