import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, Modal, Alert } from "react-native";
import {
  Appbar,
  Button,
  DataTable,
  Portal,
  Provider,
  Text,
} from "react-native-paper";

const WidgetProductChoice = ({ onPress }) => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        Alert.alert("Ups!", error);
      });
  }, []);

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          animationType="slide"
          style={{
            backgroundColor: "white",
          }}>
          <ScrollView>
            <Appbar.Header>
              <Appbar.BackAction onPress={() => setVisible(false)} />
              <Appbar.Content title="Pilih Product" />
            </Appbar.Header>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Title</DataTable.Title>
                <DataTable.Title>Category</DataTable.Title>
                <DataTable.Title numeric>Price</DataTable.Title>
              </DataTable.Header>

              {products.map((product, index) => (
                <DataTable.Row
                  key={index}
                  onPress={() => {
                    onPress(product);
                    setVisible(false);
                  }}>
                  <DataTable.Cell>{product.title}</DataTable.Cell>
                  <DataTable.Cell>{product.category}</DataTable.Cell>
                  <DataTable.Cell numeric>{product.price}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </ScrollView>
        </Modal>
      </Portal>
      <Button onPress={() => setVisible(true)}>Pilih Product</Button>
    </Provider>
  );
};

export default WidgetProductChoice;
