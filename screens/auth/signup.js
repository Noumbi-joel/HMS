import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

//svg
import { SvgXml } from "react-native-svg";

//react native elements
import { Input, Icon, Button, CheckBox } from "@rneui/themed";

//KeyboardAwareScrollView
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//svg icons
import { hms_icon } from "../../assets/svg/hospital_icon";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Signup = (props) => {
  const [seePwd, setSeePwd] = useState(true);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setF] = useState(false);

  const { width, height } = Dimensions.get("window");
  {
    /* <ScrollView
    contentContainerStyle={[
      styles.container,
      { marginTop: height - height * 0.95 },
    ]}
  > */
  }
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[
        styles.container,
        { marginTop: height - height * 0.95 },
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
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="City"
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="Country"
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="Mail"
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="Phone (eg: 6XXXXXXXX)"
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="Date of birth (eg: 11/5/2010)"
        containerStyle={{ alignItems: "center" }}
        inputContainerStyle={{ width: width - width * 0.2 }}
      />

      <Input
        placeholder="******"
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
        title="Sign in"
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
