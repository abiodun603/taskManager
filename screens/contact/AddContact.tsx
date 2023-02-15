import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons } from '@expo/vector-icons'; 
import { styled } from 'nativewind';
import {Box} from "native-base"
import Input from '../../components/Input';
import Button from '../../components/CustomButton';
import Colors from '../../constants/Colors';
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
type Props = NativeStackScreenProps<RootStackParamList, "AddContact">;

const StyledView = styled(View)
const w = Dimensions.get("window").width

const AddContact: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title='Add new contact'
    >
      <View style={styles.container}>
        {/* picture */}
        <View style={[styles.circleAvatar, {marginBottom: 30}]}>
          {/* icon if image is not present */}
          <MaterialCommunityIcons name='camera' color={Colors.text} size={30}/>
        </View>
        
        {/* input */}
        <Input
          label = "Name"
          placeholder='Enter contact name'
        />

        <Input
          label = "Phone number"
          placeholder='112 346'
        />

        <StyledView className="flex flex-row  items-center space-x-2 mt-6">
          <Box className="basis-1/2 w-full text-black">
            <Button
              title='Cancel'
              buttonStyle={{backgroundColor: 'transparent', borderColor: "#B3B3B3", borderWidth: 1}}
              titleColor= {Colors.gray}
            />
          </Box>
          <Box className="basis-1/2 w-full text-black">
            <Button
              title='Save'
            />
          </Box>
        </StyledView>
      </View>
    </Layout>
  )
}

export default AddContact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  circleAvatar: {
    width: 100,
    height: 100,
    backgroundColor: "#E5E5E5",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonRow: {
    width: w*1,
    flexDirection: "row",
  }
})