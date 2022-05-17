import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { AuthContext } from "../../contexts/auth";

export default function SubCategoria() {
  const { subCatSelector } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.modalTitle}>SubCategoria</Text>
      {subCatSelector === "A" && (
        <>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              A.1 Armazenamento/Acionamento Incorreto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              A.2 Falha na identificação
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              A.3 Mistura de Resíduos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              A.4 Derrame/Vazamento de resíduos
            </Text>
          </TouchableOpacity>
        </>
      )}
      {subCatSelector === "B" && (
        <>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              B.1 Armazenamento/Acionamento Incorreto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              B.2 Falha na identificação
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              B.3 Mistura de Resíduos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              B.4 Derrame/Vazamento de resíduos
            </Text>
          </TouchableOpacity>
        </>
      )}
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
