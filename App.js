import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

//global app navigation
import AppNavigator from "./navigation/AppNavigation";

//appLoading
import AppLoading from "expo-app-loading";

/* import AsyncStorage from "@react-native-async-storage/async-storage"; */

//fonts
import * as Font from "expo-font";
import AuthContextProvider from "./store";

//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducers from "./redux/reducers";

//reducers
const store = createStore(rootReducers, applyMiddleware(thunk));

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

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <AppNavigator />
      </AuthContextProvider>
    </Provider>
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
