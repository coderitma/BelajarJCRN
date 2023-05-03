import { useState } from "react";
import { Text } from "react-native";
import {
  Appbar,
  Divider,
  List,
  MD3Colors,
  RadioButton,
  TextInput,
} from "react-native-paper";

const ScreenPenjualanCreate = () => {
  const [items, setItems] = useState([]);
  const [payment, setPayment] = useState({
    total: 0,
    pay: 0,
    change: 0,
    method: "",
  });

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Point Of Sales" />
      </Appbar.Header>
      <Divider />
      <List.Section>
        <List.Subheader>Items</List.Subheader>
        <Divider />
        <List.Item
          title="Lorem Ipsum 1"
          description="Rp. 12000 x 2"
          right={() => <Text>Rp. 24.000</Text>}
        />
        <List.Item
          title="Lorem Ipsum 1"
          description="Rp. 12000 x 2"
          right={() => <Text>Rp. 24.000</Text>}
        />
        <List.Item
          title="Lorem Ipsum 1"
          description="Rp. 12000 x 2"
          right={() => <Text>Rp. 24.000</Text>}
        />
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
    </>
  );
};

export default ScreenPenjualanCreate;
