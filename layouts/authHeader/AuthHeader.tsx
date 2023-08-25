import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import Animated from 'react-native-reanimated';

// ** Assets
import Logo from "../../assets/icon.svg";

// ** Contants
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';


// 
interface HeaderProps {
  title?: string;
}

const AuthHeader: React.FC<HeaderProps> = ({ title}) => {


  return (
      <Animated.View className="">
        <View className='items-center justify-center mt-14' >
          <Logo style= {{width: 500}} />
        </View>
        <View style={styles.header}>
          <Text
            className=' items-content justify-center text-kblack2 text-[16px] mt-3 align-center'
          >
            {title}
          </Text>
        </View>
      </Animated.View>
  )
}

export default AuthHeader

const styles = StyleSheet.create({
  header: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {

  },
  title: {
    textAlign:"center",
    color: Colors.darkText,
    fontSize: FontSize.large,
    fontFamily:Font["inter-medium"],
    marginTop: 25
  },
  head: {
    color: "#1F1A1D",
    fontSize: FontSize.xLarge,
    fontFamily:Font["inter-medium"],
    marginTop: 15
  },
  description: {
    color: "#4E444B",
    fontSize: FontSize.small,
    fontFamily:Font["inter-medium"],
    marginVertical: 10,
    
  }
})