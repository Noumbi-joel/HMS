import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
  Image,
} from "react-native";

import anime from "../../../../assets/png/anime.png";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";

//ratings
import { Rating, AirbnbRating } from "react-native-ratings";

const DoctorProfile = (props) => {
  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View style={styles.btm_doc_info_container}>
        <View style={[styles.linearLayout, { marginVertical: 20 }]}>
          <Image source={anime} style={styles.docImg} />
          <View style={{ marginLeft: 10 }}>
            <View style={styles.linearLayout}>
              <Text style={styles.docName}>Dr Leonard Campbell</Text>
              <Ionicons
                name="checkmark-circle"
                style={{ marginLeft: 5 }}
                size={24}
                color="#8a33ff"
              />
            </View>
            <Text style={{ fontFamily: "Montserrat", color: "#635f69" }}>
              Cardiologist . 6 years of exp
            </Text>
          </View>
        </View>
        <Divider style={{ marginVertical: 10 }} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.docName, { fontSize: 17 }]}>
            Book an appointment
          </Text>

          <View
            style={[styles.linearLayout, { justifyContent: "space-between" }]}
          >
            <Entypo name="chevron-with-circle-left" size={30} color="#8a33ff" />
            <View style={[styles.linearLayout, { flexDirection: "column" }]}>
              <MaterialCommunityIcons
                name="calendar-clock"
                size={30}
                color="#8a33ff"
                style={{ alignSelf: "center", marginVertical: 20 }}
              />
              <Text
                style={[
                  styles.docName,
                  {
                    fontSize: 17,
                    fontFamily: "Montserrat",
                    alignSelf: "center",
                  },
                ]}
              >
                {`Today, ${new Date().toLocaleDateString("en-US", {
                  month: "long",
                })}`}
              </Text>
            </View>
            <Entypo
              name="chevron-with-circle-right"
              size={30}
              color="#8a33ff"
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.linearLayout]}
          >
            <View style={styles.hour}>
              <Text
                style={{
                  fontFamily: "Poppins",
                  color: "#623f8c",
                  marginLeft: 10,
                }}
              >
                8h30 am
              </Text>
            </View>
            <View style={styles.hour}>
              <Text
                style={{
                  fontFamily: "Poppins",
                  color: "#623f8c",
                  marginLeft: 10,
                }}
              >
                8h30 am
              </Text>
            </View>
            <View style={styles.hour}>
              <Text
                style={{
                  fontFamily: "Poppins",
                  color: "#623f8c",
                  marginLeft: 10,
                }}
              >
                8h30 am
              </Text>
            </View>
            <View style={styles.hour}>
              <Text
                style={{
                  fontFamily: "Poppins",
                  color: "#623f8c",
                  marginLeft: 10,
                }}
              >
                8h30 am
              </Text>
            </View>
          </ScrollView>

          <Divider style={{ marginVertical: 10 }} />
          <Text style={[styles.docName, { fontSize: 17 }]}>
            Patient Reviews
          </Text>
          <Text style={{ fontFamily: "Montserrat", color: "#635f69" }}>
            98% of patients recommend Dr Leonard Campbell, based on 82 reviews
          </Text>

          <View
            style={[styles.linearLayout, { justifyContent: "space-between" }]}
          >
            <View style={styles.docRating}>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 40,
                  color: "#fff",
                }}
              >
                4.9
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  color: "#eae0f4",
                }}
              >
                of 5
              </Text>
            </View>
            <View style={[styles.linearLayout, { flexDirection: "column" }]}>
              <View style={styles.linearLayout}>
                <Text style={{ fontFamily: "Montserrat", color: "#635f69" }}>
                  50 times
                </Text>
                <AirbnbRating
                  count={5}
                  defaultRating={5}
                  size={15}
                  isDisabled={true}
                  showRating={false}
                />
              </View>

              <View style={styles.linearLayout}>
                <Text style={{ fontFamily: "Montserrat", color: "#635f69" }}>
                  20 times
                </Text>
                <AirbnbRating
                  count={5}
                  defaultRating={4}
                  size={15}
                  isDisabled={true}
                  showRating={false}
                />
              </View>

              <View style={styles.linearLayout}>
                <Text style={{ fontFamily: "Montserrat", color: "#635f69" }}>
                  5 times
                </Text>
                <AirbnbRating
                  count={5}
                  defaultRating={3}
                  size={15}
                  isDisabled={true}
                  showRating={false}
                />
              </View>

              <View style={styles.linearLayout}>
                <Text style={{ fontFamily: "Montserrat", color: "#635f69" }}>
                  4 times
                </Text>
                <AirbnbRating
                  count={5}
                  defaultRating={2}
                  size={15}
                  isDisabled={true}
                  showRating={false}
                />
              </View>
              
              <View style={styles.linearLayout}>
                <Text style={{ fontFamily: "Montserrat", color: "#635f69" }}>
                  1 times
                </Text>
                <AirbnbRating
                  count={5}
                  defaultRating={5}
                  size={15}
                  isDisabled={true}
                  showRating={false}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  docImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#8a33ff",
  },
  linearLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
  docName: {
    color: "#252a5c",
    fontFamily: "Poppins",
    fontSize: 20,
  },
  hour: {
    padding: 5,
    borderRadius: 50,
    width: 90,
    backgroundColor: "#f7f2ff",
  },
  btm_doc_info_container: {
    backgroundColor: "#f8f2fa",
    width: "100%",
    height: "100%",
    paddingHorizontal: 15,
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  docRating: {
    width: 90,
    height: 90,
    padding: 10,
    backgroundColor: "#8a33ff",
    borderRadius: 50,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DoctorProfile;
