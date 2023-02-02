import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import Font from '../constants/Font';
import Colors from '../constants/Colors';

interface ControlPanelProps {
  onPress: () => void;
}
const ControlPanel: React.FC<ControlPanelProps> = ({onPress}) => {
  const [mute, setMute] = useState<boolean>(false)
  return (
        <View style={styles.controlContainer}>
          {/*  */}
          <TouchableOpacity
            onPress={() => setMute(!mute)}
          >
            <View style={styles.control}>  
              {/* icon */}
              <MaterialIcons name={mute ? 'mic-off' : 'mic'} style={styles.controlIcon}/>
              {/* name */}
              <Text style={styles.controlText} >Mute</Text>
            </View>
          </TouchableOpacity>
          {/*  */}
          <View style={styles.control}>
            {/* icon */}
            <MaterialIcons name='photo-camera' style={styles.controlIcon}/>
            {/* name */}
            <Text style={styles.controlText}>Camera</Text>
          </View>
          {/*  */}
          <TouchableOpacity
           onPress={() => onPress}
          >
            <View style={styles.control}>
              {/* icon */}
              <MaterialIcons name='chat' style={styles.controlIcon}/>
              {/* name */}
              <Text style={styles.controlText}>Chat</Text>
            </View>
          </TouchableOpacity>
          {/*  */}
          <View style={styles.control}>
            {/* icon */}
            <MaterialIcons name='more-vert' style={styles.controlIcon}/>
            {/* name */}
            <Text style={styles.controlText}>More</Text>
          </View>
        </View>
  )
}

export default ControlPanel

const styles = StyleSheet.create({
  controlContainer: {
    width: '100%',
    height: 66,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 0, 
    backgroundColor: '#E8E8E8'
  },
  control: {
    alignItems: 'center',
  },
  controlIcon: {
    fontSize: 25
  },
  controlText: {
    fontSize: 10,
    color: Colors.text,
    fontFamily: Font['poppins-regular'],
    marginTop: 3
  }
})