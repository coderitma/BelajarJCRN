import { useState } from "react";
import {
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
    <View>
      <TextInput placeholder="Email" />
    </View>
  );
}
