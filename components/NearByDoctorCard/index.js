import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import men from "../../assets/png/men.jpg";
import women from "../../assets/png/women.png";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Divider } from "@rneui/themed";

const NearByDoctorCard = (props) => {
  const { width } = Dimensions.get("window");

  return (
    <View style={[styles.container, { width: width - width * 0.08 }]}>
      <View style={styles.linearLayout}>
        {props.doc?.gender === "male" ? (
          <Image source={men} style={styles.docImg} />
        ) : (
          <Image source={women} style={styles.docImg} />
        )}

        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("doctorProfile", { doctor: props.doc })
          }
          style={{ marginLeft: 10 }}
        >
          <View style={styles.linearLayout}>
            <Text style={styles.docName}>Dr {props.doc?.name}</Text>
            {props.verified && (
              <Ionicons
                name="checkmark-circle"
                style={{ marginLeft: 5 }}
                size={24}
                color="#8a33ff"
              />
            )}
          </View>
          <Text style={{ fontFamily: "Montserrat", color: "#635f69" }}>{props.doc?.speciality} . {props.doc?.exp} of exp</Text>
        </TouchableOpacity>
      </View>
      <Divider style={{ marginVertical: 10 }} />
      <View style={styles.linearLayout}>
        <FontAwesome name="thumbs-o-up" size={24} color="#623f8c" />
        <Text
          style={{ fontFamily: "Poppins", color: "#623f8c", marginLeft: 10 }}
        >
          96%
        </Text>
        <Text
          style={{ fontFamily: "Montserrat", color: "#68636d", marginLeft: 10 }}
        >
          86 patients
        </Text>
      </View>

      <View style={[styles.linearLayout, { marginVertical: 5 }]}>
        <EvilIcons name="location" size={24} color="#623f8c" />
        <Text
          style={{ fontFamily: "Montserrat", color: "#68636d", marginLeft: 10 }}
        >
          {props.doc?.city}, {props.doc?.country}
        </Text>
      </View>

      <View style={[styles.linearLayout, { marginVertical: 5 }]}>
        <Ionicons name="ios-time-outline" size={24} color="#623f8c" />
        <Text
          style={{ fontFamily: "Montserrat", color: "#68636d", marginLeft: 10 }}
        >
          Available:
        </Text>
        <Text
          style={{ fontFamily: "Poppins", color: "#623f8c", marginLeft: 10 }}
        >
          Today
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.linearLayout}
      >
        {props.doc?.time.split(",").map((time, index) => (
          <View style={styles.hour} key={index}>
            <Text
              style={{
                fontFamily: "Poppins",
                color: "#623f8c",
                marginLeft: 10,
              }}
            >
              {time} am
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 15,
    height: 220,
    overflow: "hidden",
    marginBottom: 20,
  },
  docImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#8a33ff",
    borderWidth: 2,
    borderColor: "#fff",
  },
  linearLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
  docName: {
    color: "#252a5c",
    fontFamily: "Poppins",
  },
  hour: {
    padding: 5,
    borderRadius: 50,
    width: 95,
    marginLeft: 10,
    backgroundColor: "#f7f2ff",
  },
});

export default NearByDoctorCard;
