import { Appbar, List, Text } from "react-native-paper";

const ScreenPenjualanSuccess = ({ navigation, route }) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Detail Pembelian" />
      </Appbar.Header>

      <List.Section>
        <List.Subheader>Items</List.Subheader>
        {route.params.items &&
          route.params.items.map((value, index) => (
            <List.Item
              key={index}
              title={value.title}
              description={value.price}
            />
          ))}
      </List.Section>
    </>
  );
};

export default ScreenPenjualanSuccess;
