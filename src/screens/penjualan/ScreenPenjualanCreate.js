import { useState } from "react";
import { Text } from "react-native";
import { Appbar, List, MD3Colors, TextInput } from "react-native-paper";

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

      <List.Section>
        <List.Subheader>Items</List.Subheader>
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

      <List.Section>
        <List.Subheader>Pembayaran</List.Subheader>
        <List.Item title="Total" right={() => <Text>Rp. 72.000</Text>} />
        <List.Item title="Change" right={() => <Text>Rp. 0</Text>} />
      </List.Section>
      <TextInput style={{ marginHorizontal: 16 }} mode="outlined" label="Pay" />
    </>
  );
};

export default ScreenPenjualanCreate;
