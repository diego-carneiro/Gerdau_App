import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Desvio() {
  const [description, setDescription] = useState("");

  async function recordDesvioDescription() {
    await AsyncStorage.setItem("@desvioDescription", description);
    Alert.alert("Quantidade", `A Quantidade foi definida para: ${description}`),
    {
      text: "OK",
    };
  }

  return (
    <View style={styles.container}>
      <Text style={styles.modalTitle}>Desvio</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição do desvio"
        onChangeText={(value) => setDescription(value)}
      />
      <TouchableOpacity style={styles.button} onPress={recordDesvioDescription}>
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          SALVAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    width: "90%",
    height: 56,
    backgroundColor: "#1E97F3",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    borderRadius: 12,
  },
  input: {
    width: "90%",
    height: 52,
    marginTop: 42,
    marginBottom: 12,
    padding: 12,
    borderColor: "gray",
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    margin: 20,
    fontSize: 20,
  },
});
