import * as React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ** Types 
import { RootStackParamList } from "../types";

// ** Constants
import Colors from "../constants/Colors";

// ** Screens
import LoginScreen from "../screens/auth/Login";
import Task from "../screens/task/Task";

// ** Context

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
        <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
 const Stack = createNativeStackNavigator<RootStackParamList>();
//  const Tab = createMaterialBottomTabNavigator();

 function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="TaskScreen" component={Task}/>
    </Stack.Navigator>
  );
}

