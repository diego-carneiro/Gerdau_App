import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Button({
  navigation,
  buttonType,
  buttonText,
  buttonNavigation,
}) {
  return (
    <>
      {buttonType === 1 && ( //navigation button style 1
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate(buttonNavigation)}
        >
          <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
            {buttonText}
          </Text>
        </TouchableOpacity>
      )}
      {buttonType === 2 && ( //navigation button style 2
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate(buttonNavigation)}
        >
          <Text style={{ color: "#FFF", fontSize: 20 }}>{buttonText}</Text>
        </TouchableOpacity>
      )}
      {buttonType === 3 && (
        <TouchableOpacity style={styles.button1}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button1: {
    width: "90%",
    height: 56,
    backgroundColor: "#1E97F3",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    borderRadius: 12,
  },
  button2: {
    width: "90%",
    height: 56,
    backgroundColor: "crimson",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    borderRadius: 12,
  },
});
