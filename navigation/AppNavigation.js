import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

//tab navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//stack navigator
import { createStackNavigator } from "@react-navigation/stack";

//svg xml
import { SvgXml } from "react-native-svg";

//outline svg
import { home_icon } from "../assets/svg/home_icon";
import { chatting_icon } from "../assets/svg/chatting_icon";
import { planning_icon } from "../assets/svg/planning_icon";
import { profile_icon } from "../assets/svg/profile_icon";
import { stethoscope_icon } from "../assets/svg/stethoscope_icon";

//unfocused svg
import { un_home_icon } from "../assets/svg/unfocused/un_home";
import { un_chatting_icon } from "../assets/svg/unfocused/un_chatting";
import { un_planning_icon } from "../assets/svg/unfocused/un_planning";
import { un_profile_icon } from "../assets/svg/unfocused/un_profile";
import { un_stethoscope_icon } from "../assets/svg/unfocused/un_stethoscope";

//navigation container
import { NavigationContainer } from "@react-navigation/native";

//initialization
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// ******* screens ******** //
//Auth Stack
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";

//Patient Stack
import Home from "../screens/patient/home";
import Chatting from "../screens/patient/chatting";
import PastReview from "../screens/patient/past_review";
import Planning from "../screens/patient/planning";
import Profile from "../screens/patient/profile";

/* import ForgotPassword from "../screens/Auth/ForgotPassword";
 */

//colors
import { colors } from "../utils/colors";

const appTheme = {
  colors: {
    background: colors.white,
  },
};

//App stacks
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

const HomeStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

const PlanningStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="planning"
    >
      <Stack.Screen name="planning" component={Planning} />
    </Stack.Navigator>
  );
};

const ChattingStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="chatting"
    >
      <Stack.Screen name="chatting" component={Chatting} />
    </Stack.Navigator>
  );
};

const PastReviewStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="pastreview"
    >
      <Stack.Screen name="pastreview" component={PastReview} />
    </Stack.Navigator>
  );
};

const ProfileStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="profile"
    >
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

const AppTabs = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: styles.tabBarStyle, headerShown: false }}
      initialRouteName="homestack"
    >
      <Tab.Screen
        name="homestack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? un_home_icon : home_icon}
              width="100%"
              height="100%"
            />
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="planningstack"
        component={PlanningStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? un_planning_icon : planning_icon}
              width="100%"
              height="100%"
            />
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="chattingstack"
        component={ChattingStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? un_chatting_icon : chatting_icon}
              width="100%"
              height="100%"
            />
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="pastreviewstack"
        component={PastReviewStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? un_stethoscope_icon : stethoscope_icon}
              width="100%"
              height="100%"
            />
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="profilestack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={focused ? un_profile_icon : profile_icon}
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
      <AppTabs />
      {/* <AuthStack /> */}
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
