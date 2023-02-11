import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 
import Input from './Input';
import FontSize from '../constants/FontSize';
import Colors from '../constants/Colors';

const w = Dimensions.get('window').width

const ChatTab = () => {
  return (
    <View style={styles.chatInputFieldContainer}>
      <TouchableOpacity
        onPress={() => null}
        style={{marginRight: 5, marginTop: 8}}
      >
        <MaterialCommunityIcons name='camera' color={Colors.gray} size={30}/>
      </TouchableOpacity>
    {/* ===== INPUT FIELD ===== */}
      <View style={{flexGrow: 1, flex: 1}}>

        <Input
          placeholder='Text message'
        />
      </View>
      {/* Send Button */}
      <TouchableOpacity
        onPress={() => null}
        style={{ 
          width: 40,
          height: 40,
          borderRadius: FontSize.xxLarge,
          backgroundColor: Colors.primary,
          justifyContent:"center",
          alignItems: "center",
          marginLeft: 5,
          marginTop: 8
        }}
      >
        <FontAwesome name='send' style={{color: Colors.background, fontSize: 15}} />
      </TouchableOpacity>
    {/* </View> */}
  </View>
  )
}

export default ChatTab

const styles = StyleSheet.create({
  chatInputFieldContainer:{
    width: w*1,
    position: 'absolute', 
    bottom: 0, 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  }
})