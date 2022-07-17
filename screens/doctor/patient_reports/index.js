import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PatientReportsDoctor = (props) => {
  return (
    <View style={styles.container}>
      <Text>Patient Reports Doctor</Text>
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

export default PatientReportsDoctor;
