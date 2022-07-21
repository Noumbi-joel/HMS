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
import { Input, Icon, Button } from "@rneui/themed";

import firebase from "../../firebase";

//svg icons
import { hms_icon } from "../../assets/svg/hospital_icon";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { AuthContext } from "../../store";

const Login = (props) => {
  const [seePwd, setSeePwd] = useState(true);
  const authCtx = useContext(AuthContext)

  const onLogin = async (email, password) => {
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      const token = await res.user.getIdToken();
      authCtx.authenticate(token);
      console.log("LOGIN TOKEN " + token);
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <SvgXml xml={hms_icon} width={100} height={100} />
        <Text style={[styles.text, { fontSize: 25, fontWeight: "bold" }]}>
          STFG
        </Text>
        <Text style={[styles.text, { fontSize: 22 }]}>
          Hospital Management System
        </Text>
      </View>

      <Input
        placeholder="Email"
        leftIcon={<Entypo name="email" size={24} color="black" />}
        containerStyle={{ alignItems: "center" }}
        value={user.email}
        onChangeText={(val) => setUser({ ...user, email: val })}
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

      <Button
        title="Sign in"
        onPress={() => onLogin(user.email, user.password)}
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          borderRadius: 15,
        }}
        containerStyle={{
          width: width - width * 0.2,
        }}
      />
      <Text
        style={{
          width: width - width * 0.2,
          textAlign: "right",
          marginVertical: 10,
        }}
      >
        Forgotten password?
      </Text>
      <View style={[styles.linearLayout, { width: width - width * 0.2 }]}>
        <Text
          style={{
            marginVertical: 10,
          }}
        >
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
          <Text
            style={{
              marginVertical: 10,
              marginLeft: 10,
              color: "rgba(78, 116, 289, 1)",
            }}
          >
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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

export default Login;
