import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import Font from '../constants/Font';
import FontSize from '../constants/FontSize';
import Colors from '../constants/Colors';

interface pilotProps  {
  pilotNumber: string;
  onPress?: ()=>void;
  iconName?: any;
}
const NavButton: React.FC<pilotProps> = ({pilotNumber, iconName, onPress=()=>{}}) => {
  return (
    <TouchableOpacity  onPress={onPress} style={styles.pilotContainer}>
      {/* action icons */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons
          name= {iconName}
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
  )
}

export default NavButton


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