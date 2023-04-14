import { Text } from "react-native";

const ComponentPresentation = ({ onPress, counter }) => {
  return (
    <Text onPress={() => onPress()}>
      Hello Component Presentation {counter}
    </Text>
  );
};

export default ComponentPresentation;
