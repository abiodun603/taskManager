import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from '../../layouts/Layout';
import { Box, Image } from 'native-base';
import Input from '../../components/Input';
import { styled } from 'nativewind';
import Button from '../../components/CustomButton';
import Colors from '../../constants/Colors';
type Props = NativeStackScreenProps<RootStackParamList, "EditContact">;
const StyledView = styled(View)

const EditContact: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <Layout
      title='Edit Contact'
    >
      <View style={styles.container}>
      <View style={styles.container}>
        {/* picture */}
        <View style={[styles.circleAvatar, {marginVertical: 30}]}>
          {/* icon if image is not present */}
          <Image
            className='h-full w-full rounded-full '
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            alt="profile image"
          />
        </View>


        {/* Form Input */}
        <Input
          label = "Name"
          placeholder='Olamide Chidozie'
        />

        <Input
          label = "Phone Number"
          placeholder='112 346'
        />

        <Input
          label = "Contact Group"
          placeholder='Food Vendors - Miami'
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
      </View>
    </Layout>
  )
}

export default EditContact

const styles = StyleSheet.create({
  container: {
    padding: 20
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
})