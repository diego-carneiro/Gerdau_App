import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import { AuthContext } from "../../contexts/auth";

export default function SubCategoria({ setModalTrigger }) {
  const { setSubCategoria, subCatSelector } = useContext(AuthContext);

  function triggerAlert() {
    Alert.alert("Definição de Subcategorias", `SubCategoria definida.`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.modalTitle}>SubCategoria</Text>
      {subCatSelector === "A" && (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Armazenamento/Acionamento Incorreto");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              A.1 Armazenamento/Acionamento Incorreto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Falha na identificação");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              A.2 Falha na identificação
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Mistura de Resíduos");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              A.3 Mistura de Resíduos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Derrame/Vazamento de resíduos");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              A.4 Derrame/Vazamento de resíduos
            </Text>
          </TouchableOpacity>
        </>
      )}
      {subCatSelector === "B" && (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Fontes Fixas");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              B.1 Fontes Fixas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Fontes Móveis");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              B.2 Fontes Móveis
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Falha no Controle Ambiental");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              B.3 Falha no Controle Ambiental
            </Text>
          </TouchableOpacity>
        </>
      )}
      {subCatSelector === "C" && (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Vazamento de água");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              C.1 Vazamento de água
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Vazamento de Efluentes");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              C.2 Vazamento de Efluentes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Aporte no canal");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              C.3 Aporte no canal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Sem identificação");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              C.4 Sem identificação
            </Text>
          </TouchableOpacity>
        </>
      )}
      {subCatSelector === "D" && (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Armazenamento Incorreto");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              D.1 Armazenamento Incorreto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Falha na identificação");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              D.2 Falha na identificação
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Derrane ou vazamentos");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              D.3 Derrane ou vazamentos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              triggerAlert(),
                setModalTrigger(false),
                setSubCategoria("Falha/Inexistência da FE");
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              D.4 Falha/Inexistência da FE
            </Text>
          </TouchableOpacity>
        </>
      )}
      {subCatSelector === "E" && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            triggerAlert(),
              setModalTrigger(false),
              setSubCategoria("Vazamento");
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
            E.1 Vazamento
          </Text>
        </TouchableOpacity>
      )}
      {subCatSelector === "F" && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            triggerAlert(),
              setModalTrigger(false),
              setSubCategoria("Falha de Kit Emergência Ambiental");
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
            F.1 Falha de Kit Emergência Ambiental
          </Text>
        </TouchableOpacity>
      )}
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
    margin: 40,
    fontSize: 20,
  },
});
