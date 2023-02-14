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

interface LayoutProps {
  children?: ReactNode;
  title: string;
  iconButton?: boolean;
  onPress?: ()=>void;
  rightNavigation?: boolean | string;
  rightNavPress?: () => void;
}

const Layout: React.FC<LayoutProps> = ({title, children, iconButton, rightNavigation, onPress=() =>{}, rightNavPress=()=>{} }) => {
   return (
    <SafeAreaView style={styles.selectPlanContainer}>
      <Header title={title} iconButton={iconButton} onPress={onPress} rightNavigation={rightNavigation} rightNavPress={rightNavPress}/>
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