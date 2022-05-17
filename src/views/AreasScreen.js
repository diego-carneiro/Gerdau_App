import { StyleSheet, Text, View, ScrollView } from "react-native";

import Button from "../components/Button";

export default function AreasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow : 1, alignItems : 'center'}}>
        <Button navigation={navigation} buttonType={1} buttonText={"LOGÍSTICA"} buttonNavigation={"Logística"} />
        <Button navigation={navigation} buttonType={1} buttonText={"BARRAS"} buttonNavigation={"Barras"}/>
        <Button navigation={navigation} buttonType={1} buttonText={"TAI"} buttonNavigation={"TAI"}/>
        <Button navigation={navigation} buttonType={1} buttonText={"T2"} buttonNavigation={"T2"}/>
        <Button navigation={navigation} buttonType={1} buttonText={"SOLDAS"} buttonNavigation={"Soldas"}/>
        <Button navigation={navigation} buttonType={1} buttonText={"PRODUTOS PRONTOS"} buttonNavigation={"Produtos Prontos"}/>
        <Button navigation={navigation} buttonType={1} buttonText={"FACILITIES"} buttonNavigation={"Facilities"}/>
        <Button navigation={navigation} buttonType={1} buttonText={"MAN. MECÂNICA E UTILIDADES"} buttonNavigation={"Man. Mecânica e Utilidades"}/>
        <Button navigation={navigation} buttonType={1} buttonText={"PERITAGEM, ALMOXARIFADO E ENG. MANUTENÇÃO"} buttonNavigation={"Peritagem, Almox e Eng."}/>
        <Button navigation={navigation} buttonType={1} buttonText={"MAN. Elétrica e FM2C"} buttonNavigation={"Man. Elétrica e FM2C"}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 20,
  }
});

