import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header({ HeaderTitle }) {
  return (
    <View style={styles.header}>
      <Text style={{ color: "#FFF", fontSize: 36}}>{HeaderTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 72,
    backgroundColor: "#00008B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },
});
