import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import { AuthContext } from "../../contexts/auth";

export default function Categorias({ setModalTrigger }) {
  const { setCategoria, setSubCatSelector } = useContext(AuthContext);

  const triggerAlert = () => {
    Alert.alert("Definição de categorias", `Categoria definida.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.modalTitle}>Categorias</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSubCatSelector("A"),
            triggerAlert(),
            setModalTrigger(false),
            setCategoria("Resíduos Sólidos");
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          A. Resíduos Sólidos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSubCatSelector("B"),
            triggerAlert(),
            setModalTrigger(false),
            setCategoria("Emissões Atmosféricas");
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          B. Emissões Atmosféricas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSubCatSelector("C"),
            triggerAlert(),
            setModalTrigger(false),
            setCategoria("Efluentes a Água");
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          C. Efluentes a Água
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSubCatSelector("D"),
            triggerAlert(),
            setModalTrigger(false),
            setCategoria("Produtos Químicos");
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          D. Produtos Químicos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSubCatSelector("E"),
            setModalTrigger(false),
            triggerAlert(),
            setCategoria("Gases");
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          E. Gases
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSubCatSelector("F"),
            triggerAlert(),
            setModalTrigger(false),
            setCategoria("Recursos de Emergência");
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          F. Recursos de Emergência
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSubCatSelector("G"),
            triggerAlert(),
            setModalTrigger(false),
            setCategoria("Documentos e comunicação");
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          G. Documentos e comunicação
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    width: "90%",
    height: 56,
    backgroundColor: "#1E97F3",
    margin: 10,
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
    margin: 40,
    fontSize: 20,
    textAlign: "center",
  },
});
