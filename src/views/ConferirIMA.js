import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function ConferirIMA() {
  const { groupName, data, listaDeDesvios } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow : 1}}>
        <Text style={styles.mainTitle}>Relatório</Text>
        <Text style={styles.subTitle}>Nomes</Text>
        <Text style={styles.topicContent}>{groupName}</Text>
        <Text style={styles.subTitle}>Data</Text>
        <Text style={styles.topicContent}>{data}</Text>
        <Text style={styles.subTitle}>Desvio</Text>
        {listaDeDesvios.map((item) => (
          <>
            <Text style={styles.topicTitle}>Local</Text>
            <Text style={styles.topicContent}>{item.local}</Text>
            <Text style={styles.topicTitle}>Desvio</Text>
            <Text style={styles.topicContent}>{item.desvio}</Text>
            <Text style={styles.topicTitle}>Pesos</Text>
            <Text style={styles.topicContent}>{item.peso}</Text>
            <Text style={styles.topicTitle}>Quantidade</Text>
            <Text style={styles.topicContent}>{item.quantidade}</Text>
            <Text style={styles.topicTitle}>Categorias</Text>
            <Text style={styles.topicContent}>{item.categoria}</Text>
            <Text style={styles.topicTitle}>SubCategorias</Text>
            <Text style={styles.topicContent}>{item.subCategoria}</Text>
          </>
        ))}
        <TouchableOpacity style={styles.button} >
          <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
            GERAR RELATÓRIO
          </Text>
        </TouchableOpacity>
      </ScrollView>

    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainTitle: {
    margin: 10,
    fontSize: 22,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 6,
    marginTop: 10,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 34,
    marginTop: 10,
  },
  topicContent: {
    fontSize: 14,
    marginLeft: 60,
  },
  scrollView: {
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 20,
  }
});
