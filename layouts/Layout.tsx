import React, { ReactNode } from 'react'
import {  StyleSheet, View } from 'react-native'
import Header from './appHeader/Header'

interface LayoutProps {
  children?: ReactNode;
  title: string;
  rightNavigation?: boolean | string;
  rightNavPress?: () => void;
  navigation?: any;
}

const Layout: React.FC<LayoutProps> = ({title, rightNavigation, rightNavPress=()=>{}, children}) => {

   return (
    <View style={styles.selectPlanContainer}>
      <Header title={title}  rightNavigation={rightNavigation} rightNavPress={rightNavPress} />
      {children}
    </View>
   )
}

export default Layout

const styles = StyleSheet.create({
  selectPlanContainer: {
    flex: 1
  }
})