import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import Font from '../../constants/Font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import Animated from 'react-native-reanimated';

// 
interface HeaderProps {
  title?: string;
  rightNavigation?: boolean | string;
  rightNavPress?: () => void;
}


const Header: React.FC<HeaderProps> = ({ title, rightNavPress=()=>{}, rightNavigation}) => {
  return (
      <Animated.View style={styles.header}>
        <View></View>
        
        <Text
          style={{color: "#101828", fontSize:16, textAlign: 'center', fontFamily: Font["inter-medium"]}}
        >
          {title}
        </Text>
        <View></View>
        <View className='absolute right-4 flex flex-row items-center space-x-2'>
          {rightNavigation && 
          <TouchableOpacity
            onPress={rightNavPress}
            className='w-[85px] h-[35px] items-center justify-center border border-[rgba(29 27 32 0.1)] rounded-full'
          >
            <Text style={{color: Colors.text, fontFamily: Font['inter-medium'], fontSize: FontSize.small}}>{rightNavigation}</Text>
          </TouchableOpacity>
          }
        
        </View>
      </Animated.View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'relative',
    marginTop: 50,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  }
})