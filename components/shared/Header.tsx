import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import Font from '../../constants/Font';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { SafeAreaView } from 'react-native-safe-area-context';
const w = Dimensions.get('window').width
interface HeaderProps {
  title: string;
  onPress?: () => void;
  iconButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, onPress=()=>{}, iconButton}) => {
  const navigation = useNavigation()
  // const openMenu = () => {
  //   navigation.openDrawer()
  // }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Ionicons name="ios-arrow-back" size={28} onPress={() => navigation.goBack()} style={styles.icon} />
        <Text
          style={{color: "#101828", fontSize:16, fontFamily: Font["inter-medium"]}}
        >
          {title}
        </Text>
        <View>
          <Text></Text>
          {
            iconButton && 
            <TouchableOpacity
              onPress={onPress}
            >
              {/* square-edit-outline */}
              <MaterialCommunityIcons name="square-edit-outline" size={25} />
            </TouchableOpacity>
          }
        
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    // height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  icon: {

  }
})