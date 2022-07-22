import React, { useState, useRef, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import "react-native-gesture-handler";
import { AuthContext } from "../contexts/auth";
import Button from "../components/Button";

import Local from "./Modal/Local";
import Desvio from "./Modal/Desvio";
import Peso from "./Modal/Peso";
import Quantitidade from "./Modal/Quantidade";
import Categorias from "./Modal/Categorias";
import SubCategoria from "./Modal/SubCategoria";

export default function NovoDesvio({ navigation }) {
  const [modalContent, setModalContent] = useState(0);
  const {
    local,
    desvio,
    peso,
    quantidade,
    categoria,
    subCategoria,
    listaDeDesvios,
    setListaDeDesvios,
  } = useContext(AuthContext);
  const [modalTrigger, setModalTrigger] = useState(false);

  function criarDesvio() {
    const novoDesvio = {
      local: local,
      desvio: desvio,
      pesos: peso,
      quantidade: quantidade,
      categorias: categoria,
      subCategorias: subCategoria,
    };
    setListaDeDesvios([...listaDeDesvios, novoDesvio]);
  }

  function triggerAlert() {
    Alert.alert("Novo Desvio", `Um desvio foi adicionado ao relatório.`);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalTrigger(true);
          setModalContent(1);
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          LOCAL
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalTrigger(true);
          setModalContent(2);
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          DESVIO
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalTrigger(true);
          setModalContent(3);
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          PESOS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalTrigger(true);
          setModalContent(4);
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          QUANTIDADE
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalTrigger(true);
          setModalContent(5);
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          CATEGORIAS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalTrigger(true);
          setModalContent(6);
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          SUBCATEGORIAS
        </Text>
      </TouchableOpacity>

      <Button
        navigation={navigation}
        buttonType={1}
        buttonText={"TIRAR FOTOS"}
        buttonNavigation={"Camera"}
      />

      <TouchableOpacity
        style={styles.creationButton}
        onPress={() => {
          criarDesvio(), triggerAlert();
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          CRIAR NOVO DESVIO
        </Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalTrigger}
        onRequestClose={() => setModalTrigger(false)}
      >
        {modalContent === 1 && <Local setModalTrigger={setModalTrigger} />}
        {modalContent === 2 && <Desvio setModalTrigger={setModalTrigger} />}
        {modalContent === 3 && <Peso setModalTrigger={setModalTrigger} />}
        {modalContent === 4 && <Quantitidade setModalTrigger={setModalTrigger} />}
        {modalContent === 5 && <Categorias setModalTrigger={setModalTrigger} />}
        {modalContent === 6 && <SubCategoria setModalTrigger={setModalTrigger} />}
      </Modal>
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
  creationButton: {
    width: "90%",
    height: 56,
    backgroundColor: "#06A94D",
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
