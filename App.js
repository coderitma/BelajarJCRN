import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FormSignin from "./src/widgets/FormSignin";
import { ScrollView } from "react-native";
import ScreenProductDetail from "./src/screens/products/ScreenProductDetail";

export default function App() {
  return (
    // <ScrollView contentContainerStyle={styles.container}>
    <ScreenProductDetail />
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    flexGrow: 1,
    // backgroundColor: "",
    marginHorizontal: 24,
    justifyContent: "center",
    paddingVertical: 20,
    // marginTop: 50,
  },

  // containerCenter: {
  //   flexGrow: BASE_CONFIG_STYLE_FLEX_GROW_DEFAULT,
  //   marginHorizontal: BASE_CONFIG_STYLE_MARGIN_HORIZONTAL,

  //   gap: BASE_CONFIG_STYLE_GAP,
  //   paddingVertical: BASE_CONFIG_STYLE_PADDING_VERTICAL,
  // },
});

