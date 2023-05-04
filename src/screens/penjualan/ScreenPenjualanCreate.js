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

const ScreenPenjualanCreate = () => {
  const [items, setItems] = useState([]);
  const [payment, setPayment] = useState({
    total: 0,
    pay: 0,
    change: 0,
    method: "",
  });

  const getItem = (item) => {
    item.qty = 1;
    item.subtotal = item.qty * item.price;
    setItems((values) => [...values, item]);
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Point Of Sales" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        <WidgetProductChoice onPress={getItem} />
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
                  {item.price} x {item.qty} @ {item.subtotal}
                </Text>
              }
              left={() => (
                <IconButton
                  icon="trash-can-outline"
                  iconColor={MD3Colors.error50}
                  size={24}
                  onPress={() => console.log("Pressed")}
                />
              )}
              right={() => (
                <>
                  <ToggleButton.Row onValueChange={(value) => {}} value={""}>
                    <ToggleButton
                      icon="minus"
                      value="bluetooth"
                      // status={status}
                      // onPress={onButtonToggle}
                    />

                    <ToggleButton
                      icon="plus"
                      value="bluetooth"
                      // status={status}
                      // onPress={onButtonToggle}
                    />
                  </ToggleButton.Row>
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
