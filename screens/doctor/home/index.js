import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

//components
import PatientAppointment from "../../../components/PatientAppointment";

//images
import cuteBoy from "../../../assets/png/cuteBoy.jpg";
import cuteGirl from "../../../assets/png/cuteGirl.jpg";

const data = {
  labels: [22, 23, 24, 26, 27, 28],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWith: 2, // optional
    },
  ],
  legend: ["Visitor Stats"], // optional
};

const HomeDoctor = (props) => {
  const { width } = Dimensions.get("window");

  const chartConfig = {
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  return (
    <View style={styles.container}>
      <PatientAppointment {...props} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.roundedComponent, { paddingTop: 30 }]}
      >
        <LineChart
          data={data}
          width={width - width * 0.08}
          height={200}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          style={{ alignItems: "center" }}
          bezier
        />
        <Text
          style={{
            width: width - width * 0.08,
            alignSelf: "center",
            marginTop: 20,
            fontFamily: "Poppins",
            fontSize: 16,
          }}
        >
          Recent Visitors
        </Text>

        <View
          style={[
            styles.recentVisitorsContainer,
            { width: width - width * 0.08 },
          ]}
        >
          <View style={styles.recentVisitorsBg}>
            <Image source={cuteBoy} style={styles.patientIcon} />
          </View>
          <View
            style={[styles.recentVisitorsBg, { backgroundColor: "#b278ff" }]}
          >
            <Image source={cuteGirl} style={styles.patientIcon} />
          </View>
          <View
            style={[styles.recentVisitorsBg, { backgroundColor: "#517df5" }]}
          >
            <Image source={cuteBoy} style={styles.patientIcon} />
          </View>
          <View
            style={[styles.recentVisitorsBg, { backgroundColor: "#3f206a" }]}
          >
            <Image source={cuteGirl} style={styles.patientIcon} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundedComponent: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  recentVisitorsContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 40,
  },
  patientIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  recentVisitorsBg: {
    width: 60,
    height: 60,
    backgroundColor: "#ffcac1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});

export default HomeDoctor;
