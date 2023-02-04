import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';
import Font from '../constants/Font';

interface ButtonType {
  title: string;
  onPress?: ()=>void;
  style?: StyleProp<ViewStyle>
}

const Button: React.FC<ButtonType> = ({title, onPress=()=>{}, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 44,
        width: '100%',
        backgroundColor: Colors.primary,
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 8,
      }}
      {...props}
    >
      <Text {...props} style={{color: Colors.background, fontSize: 14, fontFamily: Font["inter-medium"]} }>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})