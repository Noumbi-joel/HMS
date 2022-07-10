import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

import { Input } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";

//components
import NearByDoctorCard from "../../../components/NearByDoctorCard";

const Home = () => {
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Input
        placeholder="Search doctor"
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={[styles.input, { width: width - width * 0.08 }]}
        leftIcon={<AntDesign name="search1" size={24} color="#9881b4" />}
      />

      <View style={styles.btm_search_container}>
        <Text
          style={{ fontFamily: "Poppins", fontSize: 22, marginVertical: 25 }}
        >
          Nearby Doctors
        </Text>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <NearByDoctorCard verified />
          <NearByDoctorCard />
        </ScrollView>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 10,
    borderColor: "#fff",
    marginTop: 25,
  },
  btm_search_container: {
    backgroundColor: "#f8f2fa",
    width: "100%",
    height: "100%",
    paddingHorizontal: 15,
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default Home;
