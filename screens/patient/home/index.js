import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
} from "react-native";

import { Input } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";

import firebase from "../../../firebase";

//components
import NearByDoctorCard from "../../../components/NearByDoctorCard";
import SearchDoctor from "../../../components/SearchDoctor";

import { useSelector, useDispatch } from "react-redux";

const Home = (props) => {
  const [modalVisible, setModalVisile] = useState(false);
  const dispatch = useDispatch();

  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} transparent animationType="slide">
        <SearchDoctor setModalVisile={setModalVisile} />
      </Modal>

      <Input
        placeholder="Search doctor"
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={[
          styles.input,
          { width: width - width * 0.08, height: 60 },
        ]}
        leftIcon={
          <TouchableOpacity onPress={() => setModalVisile(true)}>
            <AntDesign name="search1" size={24} color="#9881b4" />
          </TouchableOpacity>
        }
        leftIconContainerStyle={{
          backgroundColor: "#eae0f4",
          padding: 5,
          borderRadius: 50,
          width: 40,
          marginRight: 5,
        }}
      />

      <View style={styles.btm_search_container}>
        <Text
          style={{ fontFamily: "Poppins", fontSize: 22, marginVertical: 15 }}
        >
          Nearby Doctors
        </Text>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <NearByDoctorCard {...props} verified />
          <NearByDoctorCard {...props} />
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
