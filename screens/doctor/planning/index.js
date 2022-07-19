import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";

import { Divider } from "@rneui/themed";
import PatientAppointment from "../../../components/PatientAppointment";

const PlanningDoctor = (props) => {
  const { width } = Dimensions.get("window");
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.btmRoundedContainer}>
        <View style={styles.linearLayout}>
          <Text
            style={[
              styles.bottomRoundedContainerText,
              { fontSize: 18, fontFamily: "Poppins" },
            ]}
          >
            Monday 26
          </Text>
          <Text
            style={[
              styles.bottomRoundedContainerText,
              { color: "#66448f", fontSize: 16 },
            ]}
          >
            12 visitors
          </Text>
        </View>

        <View style={[styles.linearLayout, { alignItems: "center" }]}>
          <Text style={styles.hour}>8:00</Text>
          <Divider style={{ width: width - width * 0.3 }} />
        </View>
        <Text style={styles.dateTime}>AM</Text>
        <PatientAppointment percent={0.3} bg="#fff2ec" />
        <PatientAppointment percent={0.3} bg="#eaeffd" />
        <PatientAppointment percent={0.3} bg="#f7f2ff" />

        <View
          style={[
            styles.linearLayout,
            { alignItems: "center", marginVertical: 15 },
          ]}
        >
          <Text style={styles.hour}>8:30</Text>
          <View style={{borderWidth: 2, borderStyle: "dashed", borderColor: "red"}}>
            <Divider style={{ width: width - width * 0.3 }} />
            <Text style={[styles.hour, { textAlign: "center" }]}>
              Have a break
            </Text>
          </View>
        </View>

        <View style={[styles.linearLayout, { alignItems: "center" }]}>
          <Text style={styles.hour}>9:00</Text>
          <Divider style={{ width: width - width * 0.3 }} />
        </View>
        <Text style={styles.dateTime}>AM</Text>
        <PatientAppointment percent={0.3} bg="#fff2ec" />

        <View style={[styles.linearLayout, { alignItems: "center" }]}>
          <Text style={styles.hour}>9:30</Text>
          <Divider style={{ width: width - width * 0.3 }} />
        </View>
        <Text style={styles.dateTime}>AM</Text>
        <PatientAppointment percent={0.3} bg="#eaeffd" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btmRoundedContainer: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    marginTop: 20,
  },
  bottomRoundedContainerText: {
    fontFamily: "Montserrat",
  },
  linearLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hour: {
    fontFamily: "Poppins",
  },
  dateTime: {
    fontFamily: "Montserrat",
    color: "#b6b3bb",
  },
});

export default PlanningDoctor;
