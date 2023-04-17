import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

const DATA = [
  {
    kodeBarang: "BRG-112",
    namaBarang: "Kotak Pandora",
    hargaBeli: 7000,
    hargaJual: 7400,
    jumlahBarang: 200,
  },
  {
    kodeBarang: "BRG-111",
    namaBarang: "Kotak Pandora",
    hargaBeli: 7000,
    hargaJual: 7400,
    jumlahBarang: 200,
  },
  {
    kodeBarang: "BRG-101",
    namaBarang: "Kotak Pandora",
    hargaBeli: 7000,
    hargaJual: 7400,
    jumlahBarang: 200,
  },
  {
    kodeBarang: "BRG-1",
    namaBarang: "Kotak Pandora",
    hargaBeli: 7000,
    hargaJual: 7400,
    jumlahBarang: 200,
  },
  {
    kodeBarang: "BRG-006",
    namaBarang: "Krisbow Battery A2",
    hargaBeli: 7000,
    hargaJual: 7400,
    jumlahBarang: 200,
  },
  {
    kodeBarang: "BRG-005",
    namaBarang: "Yupi Candy Bear",
    hargaBeli: 920,
    hargaJual: 1000,
    jumlahBarang: 120,
  },
  {
    kodeBarang: "BRG-004",
    namaBarang: "Happy Care Hand Sanitizer",
    hargaBeli: 12000,
    hargaJual: 15000,
    jumlahBarang: 98,
  },
  {
    kodeBarang: "BRG-002",
    namaBarang: "Dompet Nevergate",
    hargaBeli: 14000,
    hargaJual: 23000,
    jumlahBarang: 166,
  },
  {
    kodeBarang: "BRG-908",
    namaBarang: "Kotak Pandora",
    hargaBeli: 7000,
    hargaJual: 7400,
    jumlahBarang: 200,
  },
];

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert("Barang", item.namaBarang)}
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#e3e3e3",
        borderRadius: 8,
        elevation: 2,
      }}>
      <View>
        <Text>{item.namaBarang}</Text>
        <Text>{item.kodeBarang}</Text>
      </View>
      <View>
        <Text>{item.hargaJual}</Text>
        <Text>{item.hargaBeli}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {DATA.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
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
    justifyContent: "center",
    margin: 30,
    paddingVertical: 32,
    gap: 8,
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

