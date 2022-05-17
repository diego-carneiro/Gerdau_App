import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ConferirIMA() {
  const { groupName, data, local, peso } = useContext(AuthContext);


  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Relatório</Text>
      <Text style={styles.subTitle}>Nomes</Text>
      <Text style={styles.topicContent}>{groupName}</Text>
      <Text style={styles.subTitle}>Data</Text>
      <Text style={styles.topicContent}>{data}</Text>
      <Text style={styles.subTitle}>Local</Text>
      <Text style={styles.topicContent}>{local}</Text>
      <Text style={styles.subTitle}>Peso</Text>
      <Text style={styles.topicContent}>{peso}</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          GERAR RELATÓRIO
        </Text>
      </TouchableOpacity>
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
  topicContent: {
    fontSize: 18,
    marginLeft: 6,
  },
});
