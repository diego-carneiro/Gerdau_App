import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import { AuthContext } from "../../contexts/auth";

export default function Categorias() {
  const { setCategoria, setSubCatSelector } = useContext(AuthContext);

  function triggerAlert() {
    Alert.alert("Definição de categorias", `Categoria definida.`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.modalTitle}>Categorias</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSubCatSelector("A"), triggerAlert(), setCategoria("Resíduos Sólidos")
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          A. Resíduos Sólidos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSubCatSelector("B"), triggerAlert(), setCategoria("Emissões Atmosféricas")
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          B. Emissões Atmosféricas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { setSubCatSelector("C"), triggerAlert(), setCategoria("Efluentes a Água") }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          C. Efluentes a Água
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { setSubCatSelector("D"), triggerAlert(), setCategoria("Produtos Químicos") }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          D. Produtos Químicos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { setSubCatSelector("E"), triggerAlert(), setCategoria("Gases") }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          E. Gases
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { setSubCatSelector("F"), triggerAlert(), setCategoria("Recursos de Emergência") }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          F. Recursos de Emergência
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { setSubCatSelector("G"), triggerAlert(), setCategoria("Documentos e comunicação") }}
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
    flex: 1,
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
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
});
