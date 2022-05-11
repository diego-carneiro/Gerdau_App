import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import Header from "../components/Header";

export default function AreasScreen() {
  return (
    <View style={styles.container}>
      <Header HeaderTitle={"ÁREAS"} />
      <Button name={"LOGÍSTICA"} />
      <Button name={"BARRAS"} />
      <Button name={"TAI"} />
      <Button name={"T2"} />
      <Button name={"SOLDAS"} />
      <Button name={"PRODUTOS PRONTOS"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 32,
  },
});

