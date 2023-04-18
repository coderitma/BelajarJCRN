import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FormSignin from "./src/widgets/FormSignin";
import { ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormSignin />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#fff",
    marginHorizontal: 24,
    justifyConten: "center",

    // marginTop: 50,
  },

  // containerCenter: {
  //   flexGrow: BASE_CONFIG_STYLE_FLEX_GROW_DEFAULT,
  //   marginHorizontal: BASE_CONFIG_STYLE_MARGIN_HORIZONTAL,

  //   gap: BASE_CONFIG_STYLE_GAP,
  //   paddingVertical: BASE_CONFIG_STYLE_PADDING_VERTICAL,
  // },
});

