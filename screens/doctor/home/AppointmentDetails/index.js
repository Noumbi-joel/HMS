import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import anime from "../../../../assets/png/anime.png";

import { Divider } from "@rneui/themed";

import arrowRight from "../../../../assets/png/arrowRight.png";

import SwipeButton from "rn-swipe-button";

const AppointmentDetails = (props) => {
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Image source={anime} style={styles.patientIcon} />
      <ScrollView style={styles.btmRoundedComponentContainer}>
        <View
          style={[
            styles.centeredComponent,
            {
              width: width - width * 0.08,
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <View>
            <Text style={{ fontFamily: "Poppins", fontSize: 20 }}>
              Nicolas Amazon
            </Text>
            <Text style={{ fontFamily: "Montserrat" }}>
              #293 Monthly checkup
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <AntDesign name="message1" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.btmRoundedComponent}>
          <View
            style={[
              styles.centeredComponent,
              {
                width: width - width * 0.08,
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <View style={[styles.roundedIcon, { marginRight: 20 }]}>
              <FontAwesome name="stethoscope" size={30} color="#623f8c" />
            </View>
            <View>
              <Text style={{ fontFamily: "Montserrat" }}>Doctor</Text>
              <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
                Dr Maurice Robbins
              </Text>
            </View>
          </View>

          <Divider
            style={{
              marginVertical: 15,
              width: width - width * 0.08,
              alignSelf: "center",
            }}
          />

          <View
            style={[
              styles.centeredComponent,
              {
                width: width - width * 0.08,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0,
              },
            ]}
          >
            <View style={[styles.roundedIcon, { marginRight: 20 }]}>
              <Ionicons name="calendar-outline" size={30} color="#623f8c" />
            </View>
            <View>
              <Text style={{ fontFamily: "Montserrat" }}>Date and Time</Text>
              <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
                Today, 26 Nov 8:00 am
              </Text>
            </View>
          </View>

          <SwipeButton
            disableResetOnTap
            railBackgroundColor="#8a33ff"
            railStyles={{
              backgroundColor: "#44000088",
              borderColor: "#880000FF",
            }}
            thumbIconBackgroundColor="#FFFFFF"
            title="Check in"
            titleColor="#fff"
            titleStyles={{ fontFamily: "Montserrat" }}
            containerStyles={{ marginVertical: 20 }}
            onSwipeSuccess={() => props.navigation.goBack()}
          />

          <Text
            style={{
              fontFamily: "Montserrat",
              fontSize: 12,
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Swipe to check in
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  patientIcon: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 25,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#ffcac1",
    alignSelf: "center",
  },
  btmRoundedComponentContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e0dff6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  btmRoundedComponent: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  centeredComponent: {
    marginTop: 20,
    alignSelf: "center",
  },
  roundedIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#f1eef6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});

export default AppointmentDetails;
