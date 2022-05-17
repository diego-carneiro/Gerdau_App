import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AreasScreen from "../../views/AreasScreen";
import LogisticsScreen from "../../views/Areas/LogisticsScreen";
import NovoIMA from "../../views/Areas/NovoIMA"
import BarrasScreen from "../../views/Areas/BarrasScreen";
import TAIScreen from "../../views/Areas/TAIScreen";
import T2Screen from "../../views/Areas/T2Screen";
import SoldasScreen from "../../views/Areas/SoldasScreen";
import ProdutosScreen from "../../views/Areas/ProdutosScreen"
import FacilitiesScreen from "../../views/Areas/FacilitiesScreen";
import MMUScreen from "../../views/Areas/MMUScreen"
import PAEScreen from "../../views/Areas/PAEScreen"
import MEFScreen from "../../views/Areas/MEFScreen"
import NovoDesvio from "../../views/NovoDesvio";
import ConferirIMA from "../../views/ConferirIMA";

import History from "../../views/History";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Áreas">
      <Stack.Screen name="Áreas" component={AreasScreen} />
      <Stack.Screen name="Logística" component={LogisticsScreen} />
      <Stack.Screen name="Barras" component={BarrasScreen} />
      <Stack.Screen name="TAI" component={TAIScreen} />
      <Stack.Screen name="T2" component={T2Screen} />
      <Stack.Screen name="Soldas" component={SoldasScreen} />
      <Stack.Screen name="Produtos" component={ProdutosScreen} />
      <Stack.Screen name="Facilities" component={FacilitiesScreen} />
      <Stack.Screen name="Man. Mecânica e Utilidades" component={MMUScreen} />
      <Stack.Screen name="Peritagem, Almox e Eng." component={PAEScreen} />
      <Stack.Screen name="Man. Elétrica e FM2C" component={MEFScreen} />
      <Stack.Screen name="NovoIMA" component={NovoIMA} />
      <Stack.Screen name="Histórico" component={History} />
      <Stack.Screen name="Novo Desvio" component={NovoDesvio} />
      <Stack.Screen name="Conferir IMA" component={ConferirIMA} />
   </Stack.Navigator>
  );
}
