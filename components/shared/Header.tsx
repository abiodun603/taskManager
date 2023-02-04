import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import Font from '../../constants/Font';
const w = Dimensions.get('window').width
interface HeaderProps {
  navigation?: any; //look into this later
  title?: string;
}

const Header: React.FC<HeaderProps> = ({navigation, title}) => {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
      {/* <Ionicons name="ios-arrow-back" size={28} onPress={openMenu} style={styles.icon} /> */}
      <Text
        style={{color: "#101828", fontSize:16, fontFamily: Font["inter-medium"]}}
      >Pick your One Reach number</Text>

      {/* <Text>1/2</Text> */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {

  }
})