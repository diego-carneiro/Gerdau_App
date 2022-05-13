import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header(p) {
  return (
   
    <View style={styles.header}>
      <Text style={{ color: "#FFF", fontSize: 20}}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 72,
    backgroundColor: "#00008B",
    
    display: "flex",
    alignItems: "center",
  },
});
