import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

//global app navigation
import AppNavigator from "./navigation/AppNavigation";

//appLoading
import AppLoading from "expo-app-loading";

//fonts
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

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

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
