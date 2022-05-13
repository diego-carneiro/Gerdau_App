import { StyleSheet, Text, View, ScrollView } from "react-native";

import Button from "../components/Button";

export default function AreasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Button navigation={navigation} buttonType={1} buttonText={"LOGÍSTICA"} buttonNavigation={"Logística"} />
        <Button navigation={navigation} buttonType={1} buttonText={"BARRAS"} />
        <Button navigation={navigation} buttonType={1} buttonText={"TAI"}/>
        <Button navigation={navigation} buttonType={1} buttonText={"T2"}/>
        <Button navigation={navigation} buttonType={1} buttonText={"SOLDAS"}/>
        <Button navigation={navigation} buttonType={1} buttonText={"PRODUTOS PRONTOS"} />
        <Button navigation={navigation} buttonType={1} buttonText={"FACILITES"} />
        <Button navigation={navigation} buttonType={1} buttonText={"MAN. MECÂNICA E UTILIDADES"} />
        <Button navigation={navigation} buttonType={1} buttonText={"PERITAGEM, ALMOXARIFADO E ENG. MANUTENÇÃO"} />
        <Button navigation={navigation} buttonType={1} buttonText={"PRODUTOS"} />
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

