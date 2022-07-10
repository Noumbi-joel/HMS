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

import anime from "../../assets/png/anime.png";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Divider } from "@rneui/themed";

const NearByDoctorCard = (props) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={[styles.container, { width: width - width * 0.08 }]}>
      <View style={styles.linearLayout}>
        <Image source={anime} style={styles.docImg} />
        <View style={{ marginLeft: 10 }}>
          <View style={styles.linearLayout}>
            <Text style={styles.docName}>Dr Leonard Campbell</Text>
            {props.verified && (
              <Ionicons
                name="checkmark-circle"
                style={{ marginLeft: 5 }}
                size={24}
                color="#8a33ff"
              />
            )}
          </View>
          <Text style={{ fontFamily: "Montserrat", color: "#635f69" }}>
            Cardiologist . 6 years of exp
          </Text>
        </View>
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
          421 Ambarukmo St, Brooklyn, NY
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
        <View style={styles.hour}>
          <Text
            style={{ fontFamily: "Poppins", color: "#623f8c", marginLeft: 10 }}
          >
            8h30 am
          </Text>
        </View>
        <View style={styles.hour}>
          <Text
            style={{ fontFamily: "Poppins", color: "#623f8c", marginLeft: 10 }}
          >
            8h30 am
          </Text>
        </View>
        <View style={styles.hour}>
          <Text
            style={{ fontFamily: "Poppins", color: "#623f8c", marginLeft: 10 }}
          >
            8h30 am
          </Text>
        </View>
        <View style={styles.hour}>
          <Text
            style={{ fontFamily: "Poppins", color: "#623f8c", marginLeft: 10 }}
          >
            8h30 am
          </Text>
        </View>
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
    backgroundColor: "red",
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
    width: 90,
    backgroundColor: "#f7f2ff",
  },
});

export default NearByDoctorCard;
