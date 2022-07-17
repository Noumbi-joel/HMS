import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChattingDoctor = (props) => {
  return (
    <View style={styles.container}>
      <Text>Chatting Doctor</Text>
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

export default ChattingDoctor;
