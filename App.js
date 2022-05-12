import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AreasScreen from "./src/views/AreasScreen";
import LogisticsScreen from "./src/views/LogisticsScreen"
import StackNavigator from "./src/navigation/StackNavigator/StackNavigator";


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 32,
  },
});
