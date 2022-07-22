import React, { useState, useEffect, useContext } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

//global app navigation
import AppNavigator from "./navigation/AppNavigation";

//appLoading
import AppLoading from "expo-app-loading";

/* import AsyncStorage from "@react-native-async-storage/async-storage"; */

//fonts
import * as Font from "expo-font";
import AuthContextProvider from "./store";
/* import { AuthContext } from "./store"; */

export default function App() {
  /* const authCtx = useContext(AuthContext); */
  const [fontLoaded, setFontLoaded] = useState(false);
  /* const [isTryingLoggin, setIsTryingLoggin] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
    };
    fetchToken();
    console.log("re render")
  }, []); */
  

  const loadFont = async () => {
    await Font.loadAsync({
      Poppins: require("./assets/fonts/Poppins-Bold.ttf"),
      Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    });
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setFontLoaded(true)}
        onError={() => Alert.alert("Error while loading fonts")}
      />
    );
  }


  return (
    <AuthContextProvider>
      <AppNavigator />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
