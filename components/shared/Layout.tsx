import React, { ReactNode } from 'react'
// import { Box } from 'native-base'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Header from './Header'
// import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";
// import {
//   ResponsiveValue,
//   ColorType,
// } from "native-base/lib/typescript/components/types";

// type ColorProp = {
//   ColorName: ResponsiveValue<ColorType | (string & {}) | ILinearGradientProps>;
// };
const Layout = ({title, children, iconButton, onPress=() =>{} }: { children?: ReactNode, title: string, iconButton?: boolean, onPress?: ()=>void }) => {
   return (
    <SafeAreaView style={styles.selectPlanContainer}>
      <Header title={title} iconButton={iconButton} onPress={onPress}/>
      {children}
    </SafeAreaView>
   )
}

export default Layout

const styles = StyleSheet.create({
  selectPlanContainer: {
    flex: 1
  }
})