import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FormSignin from "./src/widgets/FormSignin";
import { ScrollView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import ScreenProductDetail from "./src/screens/products/ScreenProductDetail";
import ScreenPenjualanCreate from "./src/screens/penjualan/ScreenPenjualanCreate";

export default function App() {
  return (
    <PaperProvider>
      <ScreenPenjualanCreate />
    </PaperProvider>
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

