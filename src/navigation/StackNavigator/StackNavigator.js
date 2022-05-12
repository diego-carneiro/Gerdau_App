import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AreasScreen from "../../views/AreasScreen";
import LogisticsScreen from "../../views/LogisticsScreen";
import NovoIMA from "../../views/NovoIMA";
import History from "../../views/History";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Áreas">
      <Stack.Screen name="Áreas" component={AreasScreen} />
      <Stack.Screen name="Logística" component={LogisticsScreen} />
      <Stack.Screen name="NovoIMA" component={NovoIMA} />
      <Stack.Screen name="Histórico" component={History} />
    </Stack.Navigator>
  );
}