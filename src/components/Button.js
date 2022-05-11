import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Button({ name }) {
  return (
    <View style={styles.header}>
      <Text style={{ color: "#FFF", fontSize: 30}}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 72,
    backgroundColor: "#1E97F3",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
