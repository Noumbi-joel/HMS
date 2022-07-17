import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeDoctor = (props) => {
  return (
    <View style={styles.container}>
      <Text>Home Doctor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeDoctor;
