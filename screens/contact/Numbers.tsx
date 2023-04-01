import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Divider } from 'native-base';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Entypo from "@expo/vector-icons/Entypo"
import { styled } from 'nativewind';
import Layout from '../../layouts/Layout';
import { RootStackParamList } from '../../types';
type Props = NativeStackScreenProps<RootStackParamList, "Numbers">;
const StyledView = styled(View)


const Numbers: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title = "Number Groups"
  >
    <View style={styles.container}>
    </View>
  </Layout>
  )
}

export default Numbers

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  }
})


