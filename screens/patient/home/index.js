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
import LoadingOverlay from "../../../components/LoadingOverlay";

const Home = (props) => {
  const [modalVisible, setModalVisile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.user.doctors);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setIsLoading(true);
        const snapshot = await firebase.firestore().collection("Doctor").get();
        if (!snapshot.empty) {
          return snapshot.docs.map((doc) => {
            dispatch({ type: "FETCH_DOCTORS", payload: doc.data() });
          });
        }
      } catch (e) {
        Alert.alert("FETCH DOCTORS ERROR");
      }finally{
        setIsLoading(false)
      }
    };

    fetchDoctors();
  }, []);

  const { width } = Dimensions.get("window");

  if(isLoading){
    return <LoadingOverlay />
  }

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
{/*           {!doctors.length && <Text>No doctor available</Text>}
 */}

          {doctors.map((doc, index) => (
            <View key={index}>
              <NearByDoctorCard doc={doc} {...props} verified />
            </View>
          ))}
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
