import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 
import Colors from '../constants/Colors';
import Input from '../components/Input';
import Button from '../components/Button';
import { styled } from 'nativewind';
import {Box} from "native-base"
const StyledView = styled(View)
const StyledText = styled(Text)

const w = Dimensions.get("window").width



// const Box: React.FC<BoxProps> = ({ className, ...props } ) => (
//   <StyledText className={`h-14 text-black rounded w-full ${className}`} {...props}/>
// )

const DailPad = () => {
  return (
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
  )
}

export default DailPad

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