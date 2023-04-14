import { Text, StyleSheet, Button, View } from "react-native";

const ComponentPresentation = ({ onPress, counter, up, down, reset }) => {
  return (
    <>
      <View>
        <Text
          style={counter > 10 ? styles.textDanger : styles.text}
          onPress={() => onPress()}>
          Hello Component Presentation {counter}
        </Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <Button onPress={() => reset()} title="Reset" />
        <Button onPress={() => up()} title="Up" />
        <Button onPress={() => down()} title="Down" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#10a131",
  },
  textDanger: {
    color: "red",
  },
});

export default ComponentPresentation;
