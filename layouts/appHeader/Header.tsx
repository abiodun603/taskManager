import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import Font from '../../constants/Font';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import { COLORS, SIZES } from '../../assets';
import Animated from 'react-native-reanimated';
import menu from "../../assets/images/icons/menu-left.png"
// import { NavigationScreenProps } from '@react-navigation/native'
// import type { CompositeNavigationProp } from '@react-navigation/native';
// import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
const w = Dimensions.get('window').width





// 
interface HeaderProps {
  title: string;
  onPress?: () => void;
  iconButton?: boolean;
  rightNavigation?: boolean | string;
  rightNavPress?: () => void;
  drawerNav?: boolean;
  navigation?:any;
  iconName? : any;
  iconColor? : any;
}

const Header: React.FC<HeaderProps> = ({ title, drawerNav, navigation, iconColor, iconName, onPress=()=>{},rightNavPress=()=>{}, iconButton, rightNavigation}) => {

  const navigate = useNavigation()

  return (
    // <SafeAreaView>
      <Animated.View style={styles.header}>
        {
          drawerNav ? 
          <TouchableOpacity
              style={{
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: COLORS.lightGray,
                  borderRadius: SIZES.radius
              }}
              onPress = {() => navigation.openDrawer()}
          >
            <Image source={menu}/>
          </TouchableOpacity>
          : <Ionicons name="ios-arrow-back" size={28} onPress={() => navigate.goBack()} style={styles.icon} />
        }
        
        <Text
          style={{color: "#101828", fontSize:16, fontFamily: Font["inter-medium"]}}
        >
          {title}
        </Text>
        <View>
          {rightNavigation && 
          <TouchableOpacity
            onPress={rightNavPress}
          >
            <Text style={{color: Colors.text, fontFamily: Font['inter-medium'], fontSize: FontSize.small}}>{rightNavigation}</Text>
          </TouchableOpacity>
          }
          {
            iconName && 
            <TouchableOpacity
              onPress={onPress}
            >
              <MaterialCommunityIcons name={iconName} size={25} color={iconColor}  />
            </TouchableOpacity>
          }
        
        </View>
      </Animated.View>
    // </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  icon: {

  }
})