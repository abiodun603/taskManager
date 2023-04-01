import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import React, { ComponentProps, ReactNode, useState } from 'react'
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Font from '../constants/Font';
interface ExtraInputProps {
  label?: ReactNode;
  error?: string;
  password?: boolean;
  iconName?: ComponentProps<typeof MaterialCommunityIcons>['name'];
  passwordIcon?: ReactNode;
  suffixIcon?: boolean;
  onFocus?: () => void;
}

type InputProps = TextInputProps & ExtraInputProps

const Input: React.FC<InputProps> = ({ label, iconName, error, password, passwordIcon, placeholder, suffixIcon, onFocus=() => {}, ...rest}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [hidePassword, setHidePassword] = useState(password)
  return (
    <View style={{marginBottom: 20}}>
      <Text style={[styles.label]}>{label}</Text>
      <View style={[styles.inputContainer, {
        borderColor: error
        ? Colors.red
        : isFocused
        ? Colors.darkBlue
        : "#BFBFBF"
        
      }]}>
        <MaterialCommunityIcons 
          name = {iconName}
          size={24} 
          style = {{ fontSize: FontSize.large, color: Colors.primary, marginRight: 10 }}
        />

        <TextInput 
          secureTextEntry = {hidePassword}
          autoCorrect = {false}
          onFocus = {() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholder={placeholder}
          style={{color: Colors.primary, flex: 1}}
          {...rest}
        />
        {
          suffixIcon && 
          <MaterialCommunityIcons
            name = "plus-circle"
            color="#808080"
            size={22}
          />
        }
        {
          passwordIcon && 
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            style = {{ fontSize: FontSize.large, color: "#B2B2B2"}}
            name = {hidePassword ? 'eye-outline' : 'eye-off-outline'}
          />
        }
        
      </View>
      {error && <Text style={{color: Colors.red, fontSize: 12, marginTop: 7}}>{error}</Text>}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  label: {
    marginVertical: 8,
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily:Font["inter-regular"]
  },
  inputContainer: {
    height: 44,
    backgroundColor: Colors.background,
    flexDirection: "row",
    paddingHorizontal: 8,
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 8
  }
})