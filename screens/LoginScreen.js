import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (

    <View style={styles.container}>
    <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: 'bold' }}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      

      <Button title="Login" onPress={() => navigation.navigate("Home")} />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0ededff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#bebebeff",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
});