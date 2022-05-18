import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function ConferirIMA() {
  const { groupName, data, listaDeDesvios, imageCode } =
    useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.mainTitle}>Relatório</Text>
        <Text style={styles.subTitle}>Nomes</Text>
        <Text style={styles.topicContent1}>{groupName}</Text>
        <Text style={styles.subTitle}>Data</Text>
        <Text style={styles.topicContent1}>{data}</Text>
        <Text style={styles.subTitle}>Desvio</Text>
        {listaDeDesvios.map((item, index) => (
          <View key={index}>
            <Text style={styles.topicTitle}>Local</Text>
            <Text style={styles.topicContent2}>{item.local}</Text>
            <Text style={styles.topicTitle}>Desvio</Text>
            <Text style={styles.topicContent2}>{item.desvio}</Text>
            <Text style={styles.topicTitle}>Pesos</Text>
            <Text style={styles.topicContent2}>{item.pesos}</Text>
            <Text style={styles.topicTitle}>Quantidade</Text>
            <Text style={styles.topicContent2}>{item.quantidade}</Text>
            <Text style={styles.topicTitle}>Categorias</Text>
            <Text style={styles.topicContent2}>{item.categorias}</Text>
            <Text style={styles.topicTitle}>SubCategorias</Text>
            <Text style={styles.topicContent2}>{item.subCategorias}</Text>
          </View>
        ))}
        <Text style={styles.subTitle}>Imagens</Text>
        <Image
          style={{ width: "80%", height: 320, marginLeft: 50 }}
          source={{ uri: imageCode }}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
            GERAR RELATÓRIO
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
  topicContent1: {
    fontSize: 14,
    marginLeft: 30,
  },
  topicContent2: {
    fontSize: 14,
    marginLeft: 60,
  },
  scrollView: {
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 20,
  },
});
