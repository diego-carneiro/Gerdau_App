import React, { useState, useRef, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Modalize } from "react-native-modalize";
import { AuthContext } from "../contexts/auth";
import Button from "../components/Button";

import Local from "./Modal/Local";
import Desvio from "./Modal/Desvio";
import Peso from "./Modal/Peso";
import Quantitidade from "./Modal/Quantidade";
import Categorias from "./Modal/Categorias";
import SubCategoria from "./Modal/SubCategoria";

export default function NovoDesvio({ navigation }) {
  const modalizeRef = useRef(null);
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
    imageCode,
    imageArray,
    setImageArray
  } = useContext(AuthContext);

  function triggerModal() {
    modalizeRef.current?.open();
  }


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
console.log(imageArray  );
  function triggerAlert() {
    Alert.alert("Novo Desvio", `Um desvio foi adicionado ao relatório.`);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          triggerModal();
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
          triggerModal();
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
          triggerModal();
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
          triggerModal();
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
          triggerModal();
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
          triggerModal();
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
        buttonText={" TIRAR FOTOS"}
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

      <Modalize ref={modalizeRef} snapPoint={600}>
        {modalContent === 1 && <Local />}
        {modalContent === 2 && <Desvio />}
        {modalContent === 3 && <Peso />}
        {modalContent === 4 && <Quantitidade />}
        {modalContent === 5 && <Categorias />}
        {modalContent === 6 && <SubCategoria />}
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
