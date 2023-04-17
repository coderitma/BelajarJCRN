import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.heading}>
        <Text style={styles.text}>Morning, Yanwar</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.item1}>
          <Text>Lorem ipsum</Text>
        </View>
        <View style={styles.item2}>
          <Text>Dolor sir ameteru</Text>
        </View>
        <View style={styles.item3}>
          <Text>Dolor sir ameteru</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "",
    paddingVertical: 32,
    gap: 20,
  },
  item1: {
    padding: 10,
    height: "20%",
    backgroundColor: "#8e8e8e",
    borderRadius: 10,
  },
  item2: {
    padding: 10,
    height: "20%",
    backgroundColor: "#8e8e8e",
    borderRadius: 10,
  },
  item3: {
    padding: 10,
    height: "20%",
    backgroundColor: "#8e8e8e",
    borderRadius: 10,
  },
});

