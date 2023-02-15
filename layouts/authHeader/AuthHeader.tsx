import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// image
import Logo from "../../assets/logo.svg";
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
const {height} = Dimensions.get("window");

interface HeaderProps {
  title?: string;
  description?: string;
  bigTitle?: string;
}

const Header: React.FC<HeaderProps> = ({title, description, bigTitle}) => {
  return (
    <View>
      <View style={styles.logoContainer} >
        <Logo style= {{height: height/3.0}} />
      </View>
      {title && <Text  style={styles.title}>{title}</Text>}
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  },
  title: {
    textAlign:"center",
    color: Colors.darkText,
    fontSize: FontSize.large,
    fontFamily:Font["inter-medium"],
    marginTop: 25
  },
  description: {
    color: Colors.gray,
    fontSize: FontSize.small,
    fontFamily:Font["inter-regular"],
    marginVertical: 10,
    paddingHorizontal: 40,
    textAlign:"center",
  }
})