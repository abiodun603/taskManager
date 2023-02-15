import React, { ReactNode } from 'react'
// import { Box } from 'native-base'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Header from './appHeader/Header'
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
  onPress?: ()=>void;
  rightNavigation?: boolean | string;
  rightNavPress?: () => void;
  navigation?: any;
  drawerNav?:  boolean;
  iconName? : any;
  iconColor? : any;
}

const Layout: React.FC<LayoutProps> = ({title, children, iconColor,iconName , rightNavigation, navigation,drawerNav, onPress=() =>{}, rightNavPress=()=>{} }) => {

   return (
    <SafeAreaView style={styles.selectPlanContainer}>
      <Header title={title} iconName={iconName} iconColor={iconColor} onPress={onPress} rightNavigation={rightNavigation} rightNavPress={rightNavPress} navigation={navigation} drawerNav={drawerNav}/>
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