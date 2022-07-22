import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";

//svg
import { SvgXml } from "react-native-svg";

//react native elements
import { Input, Button, CheckBox } from "@rneui/themed";

import firebase from "../../firebase";

//KeyboardAwareScrollView
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthContext } from "../../store";

//svg icons
import { hms_icon } from "../../assets/svg/hospital_icon";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import DateTimePicker from "@react-native-community/datetimepicker";

const Signup = (props) => {
  const [seePwd, setSeePwd] = useState(true);
  const [male, setMale] = useState(false);
  const [female, setF] = useState(false);

  const [roleType, setRoleType] = useState({
    patient: true,
    doctor: false,
  });

  const authCtx = useContext(AuthContext);

  const [user, setUser] = useState({
    name: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
  });

  const onSignUp = async (email, password) => {
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      try {
        const token = await res.user.getIdToken();
        authCtx.authenticate(token);
      } catch (err) {
        console.log("doc written err: ", err.message);
      }

      try {
        await firebase
          .auth()
          .currentUser.updateProfile({ displayName: user.name });
      } catch (err) {
        console.log("error while updating auth profile: " + err.message);
      }

      try {
        if (roleType.patient) {
          male
            ? await firebase
                .firestore()
                .collection("Patient")
                .doc(res.user.uid)
                .set({
                  ...user,
                  createdAt: new Date().toISOString(),
                  userId: res.user.uid,
                  gender: "male",
                  role: "patient",
                })
            : await firebase
                .firestore()
                .collection("Patient")
                .doc(res.user.uid)
                .set({
                  ...user,
                  createdAt: new Date().toISOString(),
                  userId: res.user.uid,
                  gender: "female",
                });
        }

        if (roleType.doctor) {
          delete user.dob;
          delete user.phone;
          male
            ? await firebase
                .firestore()
                .collection("Doctor")
                .doc(res.user.uid)
                .set({
                  ...user,
                  createdAt: new Date().toISOString(),
                  userId: res.user.uid,
                  gender: "male",
                  role: "doctor",
                })
            : await firebase
                .firestore()
                .collection("Doctor")
                .doc(res.user.uid)
                .set({
                  ...user,
                  createdAt: new Date().toISOString(),
                  userId: res.user.uid,
                  gender: "female",
                  role: "doctor"
                });
        }
      } catch (err) {
        console.log("user save firestore err: ", err.message);
      }
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  const { width, height } = Dimensions.get("window");
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[
        styles.container,
        { paddingTop: height - height * 0.95 },
      ]}
    >
      <View style={styles.banner}>
        <SvgXml xml={hms_icon} width={100} height={100} />
        <Text style={[styles.text, { fontSize: 25, fontFamily: "Poppins" }]}>
          STFG
        </Text>
        <Text style={[styles.text, { fontSize: 20 }]}>
          Hospital Management System
        </Text>
      </View>

      <Text style={{ fontSize: 18, fontFamily: "Montserrat" }}>I'm a</Text>
      <View style={styles.linearLayout}>
        <CheckBox
          containerStyle={{ backgroundColor: "transparent" }}
          center
          title="Patient"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={roleType.patient}
          onPress={() => setRoleType({ patient: true, doctor: false })}
        />
        <CheckBox
          containerStyle={{ backgroundColor: "transparent" }}
          center
          title="Doctor"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={roleType.doctor}
          onPress={() => setRoleType({ patient: false, doctor: true })}
        />
      </View>

      {roleType.patient && (
        <>
          <Input
            placeholder="Name"
            value={user.name}
            onChangeText={(val) => setUser({ ...user, name: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="City"
            value={user.city}
            onChangeText={(val) => setUser({ ...user, city: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="Country"
            value={user.country}
            onChangeText={(val) => setUser({ ...user, country: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="Email"
            value={user.email}
            onChangeText={(val) => setUser({ ...user, email: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="Phone (eg: 6XXXXXXXX)"
            value={user.phone}
            onChangeText={(val) => setUser({ ...user, phone: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="Date of birth (eg: 11/5/2010)"
            value={user.dob}
            onChangeText={(val) => setUser({ ...user, dob: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="******"
            value={user.password}
            onChangeText={(val) => setUser({ ...user, password: val })}
            leftIcon={<EvilIcons name="unlock" size={30} color="black" />}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            secureTextEntry={seePwd}
            rightIcon={
              <Feather
                onPress={() => setSeePwd(!seePwd)}
                name="eye-off"
                size={24}
                color="black"
              />
            }
          />
        </>
      )}

      {roleType.doctor && (
        <>
          <Input
            placeholder="Name"
            value={user.name}
            onChangeText={(val) => setUser({ ...user, name: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="City"
            value={user.city}
            onChangeText={(val) => setUser({ ...user, city: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="Country"
            value={user.country}
            onChangeText={(val) => setUser({ ...user, country: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="Email"
            value={user.email}
            onChangeText={(val) => setUser({ ...user, email: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="Speciality"
            value={user.speciality}
            onChangeText={(val) => setUser({ ...user, speciality: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="Years of experience"
            value={user.exp}
            onChangeText={(val) => setUser({ ...user, exp: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="Time availability (8:00, 9:00...)"
            value={user.time}
            onChangeText={(val) => setUser({ ...user, time: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="Matricule"
            value={user.matricule}
            onChangeText={(val) => setUser({ ...user, matricule: val })}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            style={styles.text}
          />

          <Input
            placeholder="******"
            value={user.password}
            onChangeText={(val) => setUser({ ...user, password: val })}
            leftIcon={<EvilIcons name="unlock" size={30} color="black" />}
            containerStyle={{ alignItems: "center" }}
            inputContainerStyle={{ width: width - width * 0.2 }}
            secureTextEntry={seePwd}
            rightIcon={
              <Feather
                onPress={() => setSeePwd(!seePwd)}
                name="eye-off"
                size={24}
                color="black"
              />
            }
          />
        </>
      )}

      <Text style={{ fontSize: 18 }}>Gender</Text>
      <View style={styles.linearLayout}>
        <CheckBox
          center
          title="Male"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={male}
          containerStyle={{ backgroundColor: "transparent" }}
          onPress={() => {
            setMale(!male);
            setF(!!male);
          }}
        />
        <CheckBox
          center
          title="Female"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={female}
          containerStyle={{ backgroundColor: "transparent" }}
          onPress={() => {
            setMale(!!female);
            setF(!female);
          }}
        />
      </View>

      <Button
        title="Sign up"
        onPress={() => onSignUp(user.email, user.password)}
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          borderRadius: 15,
        }}
        containerStyle={{
          width: width - width * 0.2,
        }}
      />
      <View style={[styles.linearLayout, { width: width - width * 0.2 }]}>
        <Text
          style={{
            marginVertical: 10,
          }}
        >
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text
            style={{
              marginVertical: 10,
              marginLeft: 10,
              color: "rgba(78, 116, 289, 1)",
            }}
          >
            Sign In Now
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: { fontFamily: "Montserrat" },
  input: {},
  linearLayout: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  banner: {
    marginBottom: 25,
    alignItems: "center",
  },
});

export default Signup;
