import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { Input, Button } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AuthContext } from "../../store";

const SearchDoctor = (props) => {
  const { width } = Dimensions.get("window");
  const authCtx = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Button
          icon={{
            name: "close",
            type: "EvilIcons",
            size: 20,
            color: "white",
          }}
          buttonStyle={{
            backgroundColor: "#8c34fc",
            height: 50,
            borderRadius: 30,
          }}
          containerStyle={{
            alignSelf: "flex-end",
            width: 50,
            marginBottom: 25,
            marginRight: 10,
          }}
          onPress={() => authCtx.logout()}
          titleStyle={{ fontWeight: "bold" }}
        />

        <Input
          placeholder="Search doctor"
          containerStyle={{ alignItems: "center" }}
          inputContainerStyle={[
            styles.input,
            { width: width - width * 0.08, height: 60 },
          ]}
          leftIcon={<AntDesign name="search1" size={24} color="#9881b4" />}
          leftIconContainerStyle={styles.iconContainerStyle}
        />

        <Input
          placeholder="Location"
          containerStyle={{ alignItems: "center" }}
          inputContainerStyle={[
            styles.input,
            { width: width - width * 0.08, height: 60 },
          ]}
          leftIcon={<EvilIcons name="location" size={24} color="#9881b4" />}
          leftIconContainerStyle={styles.iconContainerStyle}
        />

        <Input
          placeholder="Availability"
          containerStyle={{ alignItems: "center" }}
          inputContainerStyle={[
            styles.input,
            { width: width - width * 0.08, height: 60 },
          ]}
          leftIcon={
            <MaterialCommunityIcons
              name="calendar-clock"
              size={24}
              color="#9881b4"
            />
          }
          leftIconContainerStyle={styles.iconContainerStyle}
        />

        <Button
          title="Find Doctor"
          buttonStyle={{
            backgroundColor: "#8c34fc",
            height: 50,
            borderRadius: 30,
          }}
          containerStyle={{
            alignSelf: "center",
            width: width - width * 0.08,
          }}
          titleStyle={{ fontWeight: "bold" }}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  card: {
    borderRadius: 10,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 10,
    borderColor: "#fff",
  },
  iconContainerStyle: {
    backgroundColor: "#eae0f4",
    padding: 5,
    borderRadius: 50,
    width: 40,
    marginRight: 5,
  },
});

export default SearchDoctor;
