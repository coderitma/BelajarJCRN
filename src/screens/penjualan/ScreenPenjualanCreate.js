import { useState } from "react";
import { ScrollView, Text } from "react-native";
import {
  Appbar,
  Divider,
  IconButton,
  List,
  MD3Colors,
  RadioButton,
  TextInput,
  ToggleButton,
} from "react-native-paper";
import WidgetProductChoice from "../../widgets/products/WidgetProductChoice";
import { ServiceBaseIsDuplicateArray } from "../../services/ServiceBase";

const ScreenPenjualanCreate = () => {
  const [items, setItems] = useState([]);
  const [payment, setPayment] = useState({
    total: 0,
    pay: 0,
    change: 0,
    method: "",
  });

  const handleInput = (name, value, index) => {
    setItems((values) => {
      const arr = [...values];
      const b = arr[index];
      if (value === 0) {
        arr.splice(index, 1);
        return arr;
      }
      b[name] = value;
      b.subtotal = b[name] * b.price;
      arr[index] = b;
      return arr;
    });
  };

  const addOrUpdate = (item) => {
    if (ServiceBaseIsDuplicateArray(items, item.id, "id")) {
      update(item);
    } else {
      add(item);
    }
  };

  const add = (item) => {
    item.qty = 1;
    item.subtotal = item.qty * item.price;
    setItems((values) => [...values, item]);
  };

  const update = (item) => {
    setItems((values) => {
      const arr = [...values];
      const b = arr.find((value) => value.id === item.id);
      const i = arr.findIndex((value) => value.id === item.id);
      b.qty = b.qty + 1;
      b.subtotal = b.qty * b.price;
      arr[i] = b;
      return arr;
    });
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Point Of Sales" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        <WidgetProductChoice onPress={addOrUpdate} />
        <Divider />
        <List.Section>
          <List.Subheader>Items</List.Subheader>
          <Divider />

          {items.map((item, index) => (
            <List.Item
              key={index}
              title={item.title}
              description={
                <Text>
                  {item.price} x {item.qty || 0} @ {item.subtotal || 0}
                </Text>
              }
              right={() => (
                <>
                  <TextInput
                    value={`${item.qty || ""}`}
                    onChangeText={(text) =>
                      handleInput("qty", parseInt(text), index)
                    }
                  />
                </>
              )}
            />
          ))}
        </List.Section>
        <Divider />
        <List.Section>
          <List.Subheader>Pembayaran</List.Subheader>
          <Divider />
          <List.Item title="Total" right={() => <Text>Rp. 72.000</Text>} />
          <List.Item title="Change" right={() => <Text>Rp. 0</Text>} />
        </List.Section>
        <RadioButton.Group
          onValueChange={(value) => {
            setPayment((values) => ({ ...values, method: value }));
          }}
          value={payment.method}>
          <RadioButton.Item label="Cash" value="cash" />
          <RadioButton.Item label="Bank Transfer" value="bank" />
        </RadioButton.Group>
        <Divider />
        <TextInput
          value={`${payment.pay || ""}`}
          style={{ marginHorizontal: 16, marginTop: 16 }}
          mode="outlined"
          label="Pay"
        />
      </ScrollView>
    </>
  );
};

export default ScreenPenjualanCreate;
