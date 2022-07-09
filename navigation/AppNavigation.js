import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//svg xml
import { SvgXml } from "react-native-svg";

//navigation container
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

// ******* screens ******** //
//Auth Stack
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";

/* import ForgotPassword from "../screens/Auth/ForgotPassword";
 */

//colors
import { colors } from "../utils/colors";

const appTheme = {
  colors: {
    background: colors.white,
  },
};

const AuthStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={SignUp} />
    </Stack.Navigator>
  );
};

const AppTabs = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: styles.tabBarStyle, headerShown: false }}
      initialRouteName="SearchStack"
    >
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? coloredTabSearch : search}
              width="100%"
              height="100%"
            />
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="RecipeFeedStack"
        component={RecipeFeedStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? coloredTab2 : btmTabIcon2}
              width="100%"
              height="100%"
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? coloredTab3 : btmTabIcon3}
              width="100%"
              height="100%"
            />
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = (props) => {
  return (
    <NavigationContainer theme={appTheme}>
      <AuthStack />
      {/* {authCtx.isAuthenticated && <AppTabs />} */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.white,
  },
});

export default AppNavigator;
