import { useState } from "react";
import { ScrollView, Modal } from "react-native";
import {
  Appbar,
  Button,
  DataTable,
  Portal,
  Provider,
  Text,
} from "react-native-paper";

const WidgetProductChoice = () => {
  const [visible, setVisible] = useState(false);

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
            </DataTable>
          </ScrollView>
        </Modal>
      </Portal>
      <Button onPress={() => setVisible(true)}>Pilih Product</Button>
    </Provider>
  );
};

export default WidgetProductChoice;
