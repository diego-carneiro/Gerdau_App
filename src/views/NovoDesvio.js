import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Modalize } from "react-native-modalize";

import Button from "../components/Button";

export default function NovoDesvio({ navigation }) {
  const modalizeRef = useRef(null);

  function triggerModal() {
    modalizeRef.current?.open();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => showMode("date")}>
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          SELECIONAR DATA
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={triggerModal}>
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          INSERIR NOVOS DESVIOS
        </Text>
      </TouchableOpacity>

      <Button
        navigation={navigation}
        buttonType={2}
        buttonText={"ALTERAR DESVIOS ANTERIORES"}
      />
      <Button buttonType={1} buttonText={"SALVAR"} onPress={() => saveName()} />
      <Modalize ref={modalizeRef} snapPoint={600}>
        <Text>pinto cu buceta</Text>
      </Modalize>
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
});
