import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import fonts from "./config/fonts";
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { NativeBaseProvider, ToastProvider } from "native-base";
import Toast from 'react-native-toast-message';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { store } from './stores';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    underlineColor: 'transparent', // Set underline color to transparent
  },
};


export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <PaperProvider theme={theme}>
            <ToastProvider>
              <StatusBar style='auto' />
              <Navigation />
              <Toast />
            </ToastProvider>
          </PaperProvider>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  );
}