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
import Account from './Account'
import Header from '../components/Header'

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
const curr__user = {
    display__name : "Olatunji Abiodun",
    user__image : require("../assets/images/profile/about1.jpeg")
}

const MainLayout = ({navigation, selectedTab, setSelectedTab}: {navigation: any, selectedTab: any, setSelectedTab: any}) => {
    const flatListRef = React.useRef<any>(null)
    
    // Reanimated Shared Value

    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)
    const searchTabFlex = useSharedValue(1)
    const searchTabColor = useSharedValue(COLORS.white)
    const guardTabFlex = useSharedValue(1)
    const guardTabColor = useSharedValue(COLORS.white)
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

    const searchFlexStyle = useAnimatedStyle(() => {
        return {
            flex: searchTabFlex.value
        }
    })

    const searchColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: searchTabColor.value
        }
    })
    const guardFlexStyle = useAnimatedStyle(() => {
        return {
            flex: guardTabFlex.value
        }
    })

    const guardColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: guardTabColor.value
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
            homeTabColor.value = withTiming(COLORS.blue, {duration: 500})
        }else {
            homeTabFlex.value = withTiming(1 , {duration: 500})
            homeTabColor.value = withTiming(COLORS.white, {duration: 500})
        }

        if(selectedTab == constants.screens.search) {
            flatListRef?.current?.scrollToIndex({
                index: 1,
                animated: false
            })
            searchTabFlex.value = withTiming(4 , {duration: 500})
            searchTabColor.value = withTiming(COLORS.blue, {duration: 500})
        }else {
            searchTabFlex.value = withTiming(1 , {duration: 500})
            searchTabColor.value = withTiming(COLORS.white, {duration: 500})
        }

        if(selectedTab == constants.screens.guard) {
            flatListRef?.current?.scrollToIndex({
                index: 2,
                animated: false
            })
            guardTabFlex.value = withTiming(4 , {duration: 500})
            guardTabColor.value = withTiming(COLORS.blue, {duration: 500})
        }else {
            guardTabFlex.value = withTiming(1 , {duration: 500})
            guardTabColor.value = withTiming(COLORS.white, {duration: 500})
        }
        
        if(selectedTab == constants.screens.notification) {
            flatListRef?.current?.scrollToIndex({
                index: 3,
                animated: false
            })
            notificationTabFlex.value = withTiming(4 , {duration: 500})
            notificationTabColor.value = withTiming(COLORS.blue, {duration: 500})
        }else {
            notificationTabFlex.value = withTiming(1 , {duration: 500})
            notificationTabColor.value = withTiming(COLORS.white, {duration: 500})
        }
    },[selectedTab])
    return (
        <Animated.View style={{flex:1, backgroundColor: COLORS.white}}>
            <Header
                containerStyle = {{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop:15,
                    alignItems: "center",
                }}
                title={selectedTab.toUpperCase()}
                leftComponent = {
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: COLORS.lightGray,
                            borderRadius: SIZES.radius
                        }}
                        onPress = {() => navigation.openDrawer()}
                    >
                        <Image source={menu}/>
                    </TouchableOpacity>
                }

                rightComponent = {
                    <TouchableOpacity
                        style= {{
                            borderRadius: SIZES.radius,
                            width: 40,
                            height: 40
                        }}
                    >
                    <Image source={curr__user.user__image} 
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: SIZES.radius,
                        }}
                    />
                    </TouchableOpacity>
                }
            />

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
                                {item.label === constants.screens.home && <Home/>}
                                {item.label == constants.screens.search && <Crm/>}
                                {item.label == constants.screens.guard && <DailPad/>}
                                {item.label == constants.screens.notification && <Account/>}
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
                        label={constants.screens.guard}
                        icon={addUser}
                        isFocused={selectedTab == constants.screens.guard}
                        outerContainerStyle ={guardColorStyle}
                        innerContainerStyle = {guardFlexStyle}
                        onPress={() => setSelectedTab(constants.screens.guard)}
                    />

                    <TabButton
                        label={constants.screens.search}
                        icon={search}
                        isFocused={selectedTab == constants.screens.search}
                        outerContainerStyle ={searchColorStyle}
                        innerContainerStyle = {searchFlexStyle}
                        onPress={() => setSelectedTab(constants.screens.search)}
                    />

                    <TabButton
                        label={constants.screens.notification}
                        icon={notification}
                        isFocused={selectedTab == constants.screens.notification}
                        outerContainerStyle ={notificationColorStyle}
                        innerContainerStyle = {notificationFlexStyle}
                        onPress={() => setSelectedTab(constants.screens.notification)}
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