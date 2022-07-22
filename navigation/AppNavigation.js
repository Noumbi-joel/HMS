import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

//tab navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//stack navigator
import { createStackNavigator } from "@react-navigation/stack";

//context api
import { AuthContext } from "../store";

//svg xml
import { SvgXml } from "react-native-svg";

//outline svg
import { home_icon } from "../assets/svg/home_icon";
import { chatting_icon } from "../assets/svg/chatting_icon";
import { planning_icon } from "../assets/svg/planning_icon";
import { profile_icon } from "../assets/svg/profile_icon";
import { stethoscope_icon } from "../assets/svg/stethoscope_icon";
import { alarm } from "../assets/svg/alarm";
import { settings } from "../assets/svg/settings";
import { patient_report } from "../assets/svg/patient_report";

//unfocused svg
import { un_home_icon } from "../assets/svg/unfocused/un_home";
import { un_chatting_icon } from "../assets/svg/unfocused/un_chatting";
import { un_planning_icon } from "../assets/svg/unfocused/un_planning";
import { un_profile_icon } from "../assets/svg/unfocused/un_profile";
import { un_settings } from "../assets/svg/unfocused/un_settings";
import { un_stethoscope_icon } from "../assets/svg/unfocused/un_stethoscope";
import { un_patient_report } from "../assets/svg/unfocused/un_patient_reports";

import firebase from "../firebase";

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
import DoctorProfile from "../screens/patient/home/DoctorProfile";

//Doctor Stack
import HomeDoctor from "../screens/doctor/home";
import PlanningDoctor from "../screens/doctor/planning";
import ChattingDoctor from "../screens/doctor/chatting";
import SettingsDoctor from "../screens/doctor/settings";
import PatientReportsDoctor from "../screens/doctor/patient_reports";
import AppointmentDetails from "../screens/doctor/home/AppointmentDetails";

/* import ForgotPassword from "../screens/Auth/ForgotPassword";
 */

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Toggle from "react-native-toggle-element";

//colors
import { colors } from "../utils/colors";
import LoadingOverlay from "../components/LoadingOverlay";

import { useSelector, useDispatch } from "react-redux";
import { saveDoctor, savePatient } from "../redux/actions/user";

const appTheme = {
  colors: {
    background: "#eae0f4",
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

// doctors
const HomeDoctorStack = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="homeDoctor">
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View style={styles.header_home}>
              <Text
                style={{
                  color: "#6e6d7b",
                  fontSize: 16,
                  fontFamily: "Montserrat",
                }}
              >
                Good morning,
              </Text>
              <Text
                style={{
                  color: "#231e29",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}
              >
                Maurice Robbins
              </Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => authCtx.logout()}
              style={styles.headerRightContainer}
            >
              <SvgXml xml={alarm} width="100%" height="100%" />
            </TouchableOpacity>
          ),
        }}
        name="homeDoctor"
        component={HomeDoctor}
      />
      <Stack.Screen
        options={{ headerTitle: "Appointment Details" }}
        name="appointDetails"
        component={AppointmentDetails}
      />
    </Stack.Navigator>
  );
};

const PlanningDoctorStack = (props) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date();
  const [toggleValue, setToggleValue] = useState(false);
  return (
    <Stack.Navigator initialRouteName="planningDoctor">
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={{ fontFamily: "Poppins", fontSize: 20 }}>
              {monthNames[d.getMonth()]} {d.getFullYear()}
            </Text>
          ),
          headerRight: () => (
            <Toggle
              value={toggleValue}
              onPress={(newState) => setToggleValue(newState)}
              thumbStyle={{ backgroundColor: "white" }}
              trackBar={{
                inActiveBackgroundColor: "#dfe7f8",
                activeBackgroundColor: "#dfe7f8",
              }}
              containerStyle={{ marginRight: 10 }}
              leftComponent={
                <AntDesign name="calendar" size={24} color="black" />
              }
              rightComponent={<Feather name="list" size={24} color="black" />}
            />
          ),
        }}
        name="planningDoctor"
        component={PlanningDoctor}
      />
    </Stack.Navigator>
  );
};

const ChattingDoctorStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="chattingDoctor"
    >
      <Stack.Screen name="chattingDoctor" component={ChattingDoctor} />
    </Stack.Navigator>
  );
};

const PatientReportsStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="patientReports"
    >
      <Stack.Screen name="patientReports" component={PatientReportsDoctor} />
    </Stack.Navigator>
  );
};

const SettingsDoctorStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="settingsDoctor"
    >
      <Stack.Screen name="settingsDoctor" component={SettingsDoctor} />
    </Stack.Navigator>
  );
};

//patient
const HomeStack = (props) => {
  const patient = useSelector((state) => state.user.patient);
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.headerRightContainer}>
              <SvgXml xml={alarm} width="100%" height="100%" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={styles.header_home}>
              <Text style={styles.text_header_home}>Hi, {patient?.name}</Text>
              <Text style={styles.text_header_home_snd}>
                Let's find your doctor
              </Text>
            </View>
          ),
        }}
        component={Home}
      />
      <Stack.Screen
        options={{ headerTitle: "Doctor Profile" }}
        name="doctorProfile"
        component={DoctorProfile}
      />
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
  const [isDoctor, setIsDoctor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const uid = firebase.auth().currentUser.uid;
  useEffect(() => {
    firebase
      .firestore()
      .collection("Doctor")
      .doc(uid)
      .get()
      .then((user) => {
        if (user.data()) {
          setIsDoctor(true);
          setIsLoading(false);
          console.log(user.data());
          dispatch(saveDoctor(user.data()));
        }
      })
      .catch((err) => console.error(err.message));

    firebase
      .firestore()
      .collection("patient")
      .doc(uid)
      .get()
      .then((user) => {
        if (user.data()) {
          setIsLoading(false);
          dispatch(savePatient(user.data()));
        }
      })
      .catch((err) => console.error(err.message));
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
      }}
      initialRouteName={isDoctor ? "homeStackDoctor" : "homeStack"}
    >
      {isDoctor ? (
        <>
          <Tab.Screen
            name="homeStackDoctor"
            component={HomeDoctorStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <SvgXml
                  xml={focused ? un_home_icon : home_icon}
                  width="100%"
                  height="100%"
                />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
          />

          <Tab.Screen
            name="planningDoctorStack"
            component={PlanningDoctorStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <SvgXml
                  xml={focused ? un_planning_icon : planning_icon}
                  width="100%"
                  height="100%"
                />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
          />

          <Tab.Screen
            name="chattingDoctorStack"
            component={ChattingDoctorStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <SvgXml
                  xml={focused ? un_chatting_icon : chatting_icon}
                  width="100%"
                  height="100%"
                />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
          />

          <Tab.Screen
            name="patientReportsStack"
            component={PatientReportsStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <SvgXml
                  xml={focused ? patient_report : un_patient_report}
                  width="100%"
                  height="100%"
                />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
          />

          <Tab.Screen
            name="settingsDoctorStack"
            component={SettingsDoctorStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <SvgXml
                  xml={focused ? settings : un_settings}
                  width="100%"
                  height="100%"
                />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="homeStack"
            component={HomeStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <SvgXml
                  xml={focused ? un_home_icon : home_icon}
                  width="100%"
                  height="100%"
                />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
          />

          <Tab.Screen
            name="planningStack"
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
            name="chattingStack"
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
            name="pastReviewStack"
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
            name="profileStack"
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
        </>
      )}
    </Tab.Navigator>
  );
};

const AppNavigator = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer theme={appTheme}>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AppTabs />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.white,
    paddingBottom: 10,
    paddingTop: 30,
    paddingHorizontal: 10,
    height: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "transparent",
  },
  text_header_home: {
    fontFamily: "Poppins",
    fontSize: 25,
  },
  text_header_home_snd: {
    fontFamily: "Montserrat",
    fontSize: 15,
    color: "#918799",
  },
  header_home: {
    paddingTop: 10,
  },
  headerRightContainer: {
    backgroundColor: "#fff",
    width: "30%",
    marginTop: 10,
    marginRight: 10,
    borderRadius: 50,
    paddingVertical: 10,
  },
});

export default AppNavigator;
