import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";

export default function NovoIMA({ navigation }) {
  return (
    <View style={styles.container}>
      <Button navigation={navigation} buttonType={1} buttonText={"DATA"} />
      <Button navigation={navigation} buttonType={1} buttonText={"NOME DOS INTEGRANTES"} />
      <Button navigation={navigation} buttonType={2} buttonText={"INSERIR NOVOS DESVIOS"} />
      <Button navigation={navigation} buttonType={2} buttonText={"ALTERAR DESVIOS ANTERIORES"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

