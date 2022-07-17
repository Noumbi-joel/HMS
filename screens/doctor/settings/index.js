import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsDoctor = (props) => {
  return (
    <View style={styles.container}>
      <Text>Settings Doctor</Text>
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

export default SettingsDoctor;
