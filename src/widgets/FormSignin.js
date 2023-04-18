import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function FormSignin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (value, name) => {
    setUser((values) => ({ ...values, [name]: value }));
  };

  return (
    <SafeAreaView style={styles.formContainer}>
      <View>
        <TextInput style={styles.formControl} placeholder="Email" />
      </View>
      <View>
        <TextInput
          secureTextEntry={true}
          style={styles.formControl}
          placeholder="Password"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnLabel}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    gap: 24,
  },
  formControl: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderColor: "blue",
    borderWidth: 1,
    fontSize: 16,
    width: "100%",
    borderRadius: 8,
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: "blue",
    borderRadius: 8,
    elevation: 5,
  },
  btnLabel: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
