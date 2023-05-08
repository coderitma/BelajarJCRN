import { Text } from "react-native-paper";

const ScreenPenjualanSuccess = ({ navigation, route }) => {
  return (
    <Text onPress={() => navigation.goBack()} style={{ marginTop: 40 }}>
      Hello {JSON.stringify(route.params?.payment)}
    </Text>
  );
};

export default ScreenPenjualanSuccess;
