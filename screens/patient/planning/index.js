import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Planning = () => {
  return (
    <View style={styles.container}>
      <Text>Planning Patient</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Planning;
