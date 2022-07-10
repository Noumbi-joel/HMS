import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Chatting = () => {
  return (
    <View style={styles.container}>
      <Text>Chatting Patient</Text>
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

export default Chatting;
