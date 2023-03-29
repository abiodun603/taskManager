import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Divider } from 'native-base';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Entypo from "@expo/vector-icons/Entypo"
import { styled } from 'nativewind';
import { RootStackParamList } from '../types';
import Layout from '../layouts/Layout';
type Props = NativeStackScreenProps<RootStackParamList, "">;
const StyledView = styled(View)


const Groups: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title = "Number Groups"
  >
    <View style={styles.container}>
    </View>
  </Layout>
  )
}

export default Groups

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  }
})