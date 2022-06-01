import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function ConferirIMA() {
  const { groupName, data, listaDeDesvios, imageArray } =
    useContext(AuthContext);

  const printToFile = async () => {
    const { uri } = await Print.printToFileAsync({
      html: createDynamicTable(),

    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  const createDynamicTable = () => {
    var table = "";
    for (let i in listaDeDesvios) {
      const item = listaDeDesvios[i];
      table = table + `
        <tr>
          <td>${item.local}</td>
          <td>${item.desvio}</td>
          <td>${item.pesos}</td>
          <td>${item.quantidade}</td>
          <td>${item.categorias}</td>
          <td>${item.subCategorias}</td>
        </tr>
      `
    }

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <style>
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        
        tr:nth-child(even) {
          background-color: #dddddd;
        }
        </style>
        </head>
      <body style="text-align: center;">
      <h1>Relatório<h1>
        <table>
          <tr>
            <th>Nomes</th>
          </tr>
          <tr>
            <td>${groupName}</td>
          </tr>
        <table>
        <table>
          <tr>
            <th>Data</th>          
          </tr>
          <tr>
            <td>${data}</td>                 
          </tr>
        </table>
        <table>
          <tr>
            <th>Local</th>
            <th>Desvio</th>
            <th>Pesos</th>
          <tr>
        </table>
        <table>
          <tr>
            <th>Quantidade</th>
            <th>Categorias</th>
            <th>SubCategorias</th>
          </tr>
          ${table}
        </table>
        <table class="images"></table>
        <script>

        function generate (imageArray) {
          const image = document.querySelector(".images");

          let arrayContent = [];

          for (let i = 0 ; i < imageArray.length ; i++ ){
            const item = <img src={imageArray[i]} />
            arrayContent.push(item);
          }

          for (let j = 0 ; j < arrayContent.length ; j++ ){
            image.innerHTML += arrayContent[i];
          }
        }

        generate();

        </script>
      </body>
    </html> 
  `;
    return html;
  }

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
        {imageArray.map((item, index) => (
          <Image
            style={{
              width: "80%", height: 320, marginLeft: 50, marginTop: 20,
              marginBottom: 20,
            }}
            source={{ uri: item }}
          />
        ))}
        <TouchableOpacity style={styles.button} onPress={printToFile}>
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E97F3",
    margin: 12,
    borderRadius: 12,
    height: 50,
  },
});
