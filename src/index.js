import React from "react";
import { StyleSheet, View, Text } from "react-native"

export default function Teste(){
  return(
    <View style={styles.teste}>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  teste: {
    backgroundColor: "red",
  }
});
