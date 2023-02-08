import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { FONTS } from '../assets'

const Header = ({title, containerStyle, leftComponent, rightComponent }: {title: string,containerStyle: any, leftComponent: any, rightComponent?: any }) => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection:"row",
            ...containerStyle
          }}
        >
          {/* Left */}
          {leftComponent}

          {/* Title */}
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{...FONTS.h3}}>
              {title}
            </Text>
          </View>
            
          {/* Right */}
          {/* {rightComponent} */}
        </View>
      </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({})
