import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import * as ImageManipulator from "expo-image-manipulator";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function ConferirIMA() {
  let total = 0;

  const { groupName, data, listaDeDesvios, imageArray } =
    useContext(AuthContext);

  const printToFile = async () => {
    const { uri } = await Print.printToFileAsync({
      html: await createDynamicTable(),
    });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const totalReset = () => {
    total = 0;
  };

  const createDynamicTable = async () => {
    let localDesvio = "";
    let pesoQuantidade = "";
    let categoriasSub = "";
    let QXP = 0;

    for (let i in listaDeDesvios) {
      const item = listaDeDesvios[i];

      localDesvio =
        localDesvio +
        `
          <td>${item.local}</td>
          <td>${item.desvio}</td>
      `;

      pesoQuantidade =
        pesoQuantidade +
        `
          <td>${item.pesos}</td>
          <td>${item.quantidade}</td>
      `;

      categoriasSub =
        categoriasSub +
        `
          <td>${item.categorias}</td>
          <td>${item.subCategorias}</td>
      `;
      QXP = QXP + parseInt(item.quantidade) * parseInt(item.pesos);
      console.log(QXP);
    }

    total = Math.ceil(100 - (50 * QXP) / 15);
    console.log(total, "TOTAL");

    let teste = ``;
    for (let i = 0; i < imageArray.length; i++) {
      const uriParts = imageArray[i].split(".");
      const formatPart = uriParts[uriParts.length - 1];
      let format;

      if (formatPart.includes("png")) {
        format = "png";
      } else if (formatPart.includes("jpg") || formatPart.includes("jpeg")) {
        format = "jpeg";
      }

      const manipResult = await ImageManipulator.manipulateAsync(
        imageArray[i],
        [],
        { format: format || "png", base64: true }
      );
      teste += `<img key={i} src="data:image/${format};base64, ${manipResult.base64}" style="width:200px;" />`;
    }

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <style>
        table {
          font-family: arial, sans-serif;
          font-size: 12px;
          border-collapse: collapse;
          width: 100%;
        }
        
        td, th {
          border: 1px solid #dddddd;
          font-size: 12px;
          text-align: left;
          padding: 8px;
        }
        
        tr:nth-child(even) {
          font-size: 12px;
          background-color: #dddddd;
        }
        </style>
        </head>
      <body style="text-align: center;">
      <h1>Relatório<h1>
      
        <table>
          <tr>
            <th>Nomes:</th>
          </tr>
          <tr>
            <td>${groupName}</td>
          </tr>
        </table>

        <table>
          <tr>
            <th>Data:</th>          
          </tr>
          <tr>
            <td>${data}</td>      
          </tr>
        </table>

        <table>
          <tr>
            <th>Local:</th>        
            <th>Desvio:</th>
          </tr>
          <tr>
            ${localDesvio}
          </tr>
        </table>

        <table>
          <tr>
            <th>Pesos:</th>        
            <th>Quantidade:</th>
          </tr>
          <tr>
            ${pesoQuantidade}
          </tr>
        </table>

        <table>
          <tr>
            <th>Categoria:</th>        
            <th>SubCategoria:</th>
          </tr>
          <tr>
            ${categoriasSub}
          </tr>
        </table>

        <table>
          <tr>
            <th>Total:</th>  
          </tr>
          <tr>
            <td>${total}</td>
          </tr>
        </table> 

        <table class="images">
          ${teste}
        </table>
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
  `;''
    return html;
  };

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
            key={index}
            style={{ 
              width: "40%",
              height: 320,
              marginLeft: 50,
              marginTop: 20,
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
