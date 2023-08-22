import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

// ** Constants
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';

// ** Types
import { RootStackParamList } from "../../types";

// ** Layout
import Layout from '../../layouts/Layout';



//
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<RootStackParamList, "PdfPreview">;


const Preview: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title = "Advantage.pdf"
      iconName="tray-arrow-up"
      extraOneIcon="bookmark-outline"
    >
    <View style={styles.container}>

    </View>
  </Layout>
  )
}

export default Preview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  }
})