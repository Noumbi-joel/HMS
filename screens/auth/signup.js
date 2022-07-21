import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";

//svg
import { SvgXml } from "react-native-svg";

//react native elements
import { Input, Button, CheckBox } from "@rneui/themed";

import firebase from "../../firebase";

//KeyboardAwareScrollView
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//svg icons
import { hms_icon } from "../../assets/svg/hospital_icon";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Signup = (props) => {
  const [seePwd, setSeePwd] = useState(true);
  const [male, setMale] = useState(false);
  const [female, setF] = useState(false);

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
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      console.log("user created successfully");
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
        <Text style={[styles.text, { fontSize: 25, fontWeight: "bold" }]}>
          STFG
        </Text>
        <Text style={[styles.text, { fontSize: 20 }]}>
          Hospital Management System
        </Text>
      </View>

      <Input
        placeholder="Name"
        value={user.name}
        onChangeText={(val) => setUser({ ...user, name: val })}
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="City"
        value={user.city}
        onChangeText={(val) => setUser({ ...user, city: val })}
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="Country"
        value={user.country}
        onChangeText={(val) => setUser({ ...user, country: val })}
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="Email"
        value={user.email}
        onChangeText={(val) => setUser({ ...user, email: val })}
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="Phone (eg: 6XXXXXXXX)"
        value={user.phone}
        onChangeText={(val) => setUser({ ...user, phone: val })}
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="Date of birth (eg: 11/5/2010)"
        value={user.dob}
        onChangeText={(val) => setUser({ ...user, dob: val })}
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
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

      <Text style={{ fontSize: 18 }}>Gender</Text>
      <View style={styles.linearLayout}>
        <CheckBox
          center
          title="Male"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={male}
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
  text: {},
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
