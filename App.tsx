import React from "react";
import { NativeBaseProvider } from "native-base";

import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Home } from "./src/screens/Home/Home";
import { THEME } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Home /> : <AppLoading />}
    </NativeBaseProvider>
  );
}
