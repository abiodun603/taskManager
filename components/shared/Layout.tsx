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
const Layout = ({ children }: { children?: ReactNode }) => {
   return (
    <SafeAreaView style={styles.selectPlanContainer}>
      <Header />
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