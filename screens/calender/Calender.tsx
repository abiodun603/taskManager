import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import CustomRouteBottom from '../../components/CustomRouteBottom';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
type Props = NativeStackScreenProps<RootStackParamList, "Calender">;

const Calender: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title = "SIP Extensions"
  >
    <View style={styles.container}>
      {/* if no sip extension exit */}
      <Text style={[styles.time, {textAlign: 'center'}]}>No extension added yet.</Text>
    </View>

    {/* bottomTab */}
    <CustomRouteBottom title='Add calendar configuration'  onPress={()=> null}/>
  </Layout>
  )
}

export default Calender

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
  time: {
    fontSize: FontSize.small,
    fontFamily: Font['inter-regular'],
    color: Colors.gray,
    marginTop: 25
  },

})