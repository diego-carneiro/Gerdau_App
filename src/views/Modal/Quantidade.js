import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function Quantidade() {
  const { quantidade, setQuantidade } = useContext(AuthContext);

  function triggerAlert() {
    Alert.alert(
      "Definição de pesos",
      `O valor de quantidade foi definid.`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.modalTitle}>Quantidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor para quantidade"
        onChangeText={(value) => setQuantidade(value)}
      />
      <TouchableOpacity style={styles.button} onPress={triggerAlert}>
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
