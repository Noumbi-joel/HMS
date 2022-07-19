import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

//svg icons
import { Ionicons } from "@expo/vector-icons";

//image
import anime from "../../assets/png/anime.png";

const PatientAppointment = (props) => {
  const { width } = Dimensions.get("window");
  return (
    <TouchableOpacity
      onPress={
        props.percent
          ? () => {}
          : () => props.navigation.navigate("appointDetails")
      }
      style={[
        styles.container,
        props.percent
          ? {
              width: width - width * props.percent,
              backgroundColor: props.bg,
              marginVertical: 5,
              alignSelf: "flex-end",
            }
          : { width: width - width * 0.08, backgroundColor: "#fff" },
      ]}
    >
      <View
        style={[
          styles.linearLayout,
          { backgroundColor: "#8a33ff", borderRadius: 50, padding: 5 },
        ]}
      >
        <Image source={anime} style={styles.patientIcon} />
      </View>
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.appointText}>Nicolas Amazon</Text>
        <View style={styles.linearLayout}>
          <Ionicons name="time-outline" size={24} color="#6b4b93" />
          <Text style={styles.hour}>Today, 8:00 - 8:30 am</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 50,
    marginVertical: 25,
    alignSelf: "center",
  },
  linearLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
  hour: {
    color: "#6b4b93",
  },
  patientIcon: {
    width: 50,
    height: 50,
  },
  appointText: {
    fontFamily: "Poppins",
    marginLeft: 5,
  },
});

export default PatientAppointment;
