import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FormSignin from "./src/widgets/FormSignin";

export default function App() {
  return (
    <View style={styles.container}>
      <FormSignin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 50,
  },
});

