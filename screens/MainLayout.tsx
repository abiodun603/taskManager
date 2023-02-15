import React from 'react'
import {Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image,TouchableWithoutFeedback, FlatList } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { COLORS, FONTS, SIZES } from '../assets'
import {constants} from "../constants"
import {connect} from "react-redux"
import { setSelectedTab } from '../stores/tab/tabAction'
import {LinearGradient} from 'expo-linear-gradient';// import { Search, Guard, Notification, Home } from '.'
import menu from "../assets/images/icons/menu-left.png"
import addUser from "../assets/images/icons/add-use.png"
import home from "../assets/images/icons/home.png"
import search from "../assets/images/icons/search.png"
import notification from "../assets/images/icons/bell.png"
import Home from './Home'
import Crm from './Crm'
import DailPad from './DailPad'
import Header from '../components/Header'
import Colors from '../constants/Colors'
import Messages from './messages/Messages'

const TabButton = ({label, icon, isFocused,onPress, outerContainerStyle, innerContainerStyle}: {label: string, icon: any,isFocused: boolean, onPress: () => void, outerContainerStyle: any,  innerContainerStyle: any}) => {
    return (
        <TouchableWithoutFeedback
          onPress = {onPress} 
        >
          <Animated.View
            style={[{
              flex: 1,
              // alignItems: "center",
              // justifyContent: "center",
              height: 50,
              borderRadius: 25,
              paddingHorizontal: 15,
            }, outerContainerStyle]}
          >
            <Animated.View
              style={[{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }, innerContainerStyle]}
            >
              <Image 
                source={icon} 
                style={{
                  width: 20, 
                  height: 20, 
                  tintColor: isFocused? COLORS.white : COLORS.gray
                }}
              />

              {isFocused && 
                <Text
                  numberOfLines = {1}
                  style={{
                    marginLeft: SIZES.base,
                    ...FONTS.h3,
                    color: isFocused ? COLORS.white :  COLORS.gray
                  }}
                >
                  {label}
                </Text>
              }
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
    )
   
 }
// const curr__user = {
//     display__name : "Olatunji Abiodun",
//     user__image : require("../assets/images/profile/about1.jpeg")
// }

const MainLayout = ({navigation, selectedTab, setSelectedTab}: {navigation: any, selectedTab: any, setSelectedTab: any}) => {
    const flatListRef = React.useRef<any>(null)
    
    // Reanimated Shared Value

    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)
    const messagesTabFlex = useSharedValue(1)
    const messagesTabColor = useSharedValue(COLORS.white)
    const padTabFlex = useSharedValue(1)
    const padTabColor = useSharedValue(COLORS.white)
    const notificationTabFlex = useSharedValue(1)
    const notificationTabColor = useSharedValue(COLORS.white)

    // Reanimated Animated Style
    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value
        }
    })

    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value
        }
    })

    
    const messagesFlexStyle = useAnimatedStyle(() => {
        return {
            flex: messagesTabFlex.value
        }
    })

    const messagesColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: messagesTabColor.value
        }
    })

    const padFlexStyle = useAnimatedStyle(() => {
      return {
          flex: padTabFlex.value
      }
  })

  const padColorStyle = useAnimatedStyle(() => {
      return {
          backgroundColor: padTabColor.value
      }
  })

    const notificationFlexStyle = useAnimatedStyle(() => {
        return {
            flex: notificationTabFlex.value
        }
    })

    const notificationColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: notificationTabColor.value
        }
    })
    
    React.useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, [])

    React.useEffect(() =>{
        if(selectedTab == constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index: 0,
                animated: false
            })
            homeTabFlex.value = withTiming(4 , {duration: 500})
            homeTabColor.value = withTiming(Colors.primary, {duration: 500})
        }else {
            homeTabFlex.value = withTiming(1 , {duration: 500})
            homeTabColor.value = withTiming(COLORS.white, {duration: 500})
        }

        if(selectedTab == constants.screens.messages) {
            flatListRef?.current?.scrollToIndex({
                index: 1,
                animated: false
            })
            messagesTabFlex.value = withTiming(4 , {duration: 500})
            messagesTabColor.value = withTiming(Colors.primary, {duration: 500})
        }else {
            messagesTabFlex.value = withTiming(1 , {duration: 500})
            messagesTabColor.value = withTiming(COLORS.white, {duration: 500})
        }

        if(selectedTab == constants.screens.pad) {
            flatListRef?.current?.scrollToIndex({
                index: 2,
                animated: false
            })
            padTabFlex.value = withTiming(4 , {duration: 500})
            padTabColor.value = withTiming(Colors.primary, {duration: 500})
        }else {
            padTabFlex.value = withTiming(1 , {duration: 500})
            padTabColor.value = withTiming(COLORS.white, {duration: 500})
        }
        
        if(selectedTab == constants.screens.crm) {
            flatListRef?.current?.scrollToIndex({
                index: 3,
                animated: false
            })
            notificationTabFlex.value = withTiming(4 , {duration: 500})
            notificationTabColor.value = withTiming(Colors.primary, {duration: 500})
        }else {
            notificationTabFlex.value = withTiming(1 , {duration: 500})
            notificationTabColor.value = withTiming(COLORS.white, {duration: 500})
        }
    },[selectedTab])
    return (
        <Animated.View style={{flex:1, backgroundColor: COLORS.white}}>


            <View style ={{flex:1}}>
                <FlatList
                    ref={flatListRef}
                    horizontal
                    scrollEnabled={false}
                    pagingEnabled
                    snapToAlignment="center"
                    snapToInterval = {SIZES.width}
                    showsHorizontalScrollIndicator={false}
                    data={constants.sidebar__tabs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item, index}) => {
                        return(
                            <View
                                style = {{
                                    height: SIZES.height,
                                    width: SIZES.width
                                }}
                            >
                                {item.label === constants.screens.home && <Home navigation={navigation}/>}
                                {item.label == constants.screens.messages && <Messages navigation={navigation}/>}
                                {item.label == constants.screens.pad && <DailPad navigation={navigation}/>}
                                {item.label == constants.screens.crm && <Crm navigation={navigation}/>}
                            </View>
                        )
                    }}
                />
            </View>

            <View style = {{
                // flex:1,
                height: 90,
                alignItems: "center",
                justifyContent: 'flex-end'
            }}>
                {/* Shadow */}
                <LinearGradient
                    start={{x:0, y: 0}}
                    end={{x: 0, y:4}}
                    colors = {[
                        COLORS.transparent,
                        COLORS.transparent
                    ]}
                    style={{
                        position: 'absolute',
                        top: -1,
                        left: 0,
                        right: 0,
                        height: 90,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                    }}
                />

                {/* Tabs */}
                <View
                    style={{
                        flex:1,
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: SIZES.radius,
                        paddingBottom: 10,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        backgroundColor: COLORS.white
                    }}
                >
                    <TabButton
                        label={constants.screens.home}
                        icon={home}
                        isFocused={selectedTab == constants.screens.home}
                        outerContainerStyle ={homeColorStyle}
                        innerContainerStyle = {homeFlexStyle}
                        onPress={() => setSelectedTab(constants.screens.home)}
                    />
                    
                    <TabButton
                        label={constants.screens.messages}
                        icon={addUser}
                        isFocused={selectedTab == constants.screens.messages}
                        outerContainerStyle ={messagesColorStyle}
                        innerContainerStyle = {messagesFlexStyle}
                        onPress={() => setSelectedTab(constants.screens.messages)}
                    />

                    <TabButton
                        label={constants.screens.pad}
                        icon={search}
                        isFocused={selectedTab == constants.screens.pad}
                        outerContainerStyle ={padColorStyle}
                        innerContainerStyle = {padFlexStyle}
                        onPress={() => setSelectedTab(constants.screens.pad)}
                    />

                    <TabButton
                        label={constants.screens.crm}
                        icon={notification}
                        isFocused={selectedTab == constants.screens.crm}
                        outerContainerStyle ={notificationColorStyle}
                        innerContainerStyle = {notificationFlexStyle}
                        onPress={() => setSelectedTab(constants.screens.crm)}
                    />
                    
                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})

function  mapStateToProps (state: { tabReducer: { selectedTab: any } }){
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch: any){
    return {
    setSelectedTab: (selectedTab: any) => {
           return dispatch(setSelectedTab(selectedTab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)