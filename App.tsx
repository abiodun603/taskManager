import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import fonts from "./config/fonts";
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './stores/rootReducer';
import thunk from "redux-thunk"
import { Provider } from 'react-redux';
import { NativeBaseProvider, Box } from "native-base";
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <StatusBar style='auto' />
          <Navigation />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  );
}