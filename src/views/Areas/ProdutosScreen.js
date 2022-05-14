import { StyleSheet, Text, View } from "react-native";

import Button from "../../components/Button";

export default function ProdutosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button navigation={navigation} buttonType={1} buttonText={"NOVO IMA"} buttonNavigation={"NovoIMA"}/>
      <Button navigation={navigation} buttonType={1} buttonText={"HISTÓRICO"} buttonNavigation={"Histórico"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

