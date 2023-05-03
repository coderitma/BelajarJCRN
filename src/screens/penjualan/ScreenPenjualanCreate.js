import { useState } from "react";
import { Text } from "react-native";
import { Appbar, List, MD3Colors } from "react-native-paper";

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
    </>
  );
};

export default ScreenPenjualanCreate;
