import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Shadow } from "react-native-neomorph-shadows";

export default function Button({ name }) {
  return (

      <View style={styles.button}>
        <Text style={{ color: "#FFF", fontSize: 30 }}>{name}</Text>
      </View>

  );
}

const styles = StyleSheet.create({
  button: {
    height: 72,
    backgroundColor: "#1E97F3",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 8,
  },
});
