import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AuthContext } from "../../contexts/auth";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NovoIMA({ navigation }) {
  const { setGroupName, setData } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getHours() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    setData(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Integrantes do grupo"
        onChangeText={(value) => setGroupName(value)}
      />
      <TouchableOpacity style={styles.button} onPress={() => showMode("date")}>
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          SELECIONAR DATA
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <Button
        navigation={navigation}
        buttonType={1}
        buttonText={"INSERIR NOVO DESVIO"}
        buttonNavigation={"Novo Desvio"}
      />
      <Button
        navigation={navigation}
        buttonType={1}
        buttonText={"ALTERAR DESVIOS ANTERIORES"}
      />
      <TouchableOpacity
        style={styles.creationButton}
        onPress={() => {
          navigation.navigate("Conferir IMA");
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
          Conferir IMA
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    width: "90%",
    height: 56,
    backgroundColor: "#1E97F3",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    borderRadius: 12,
  },
  input: {
    width: "90%",
    height: 52,
    marginTop: 42,
    marginBottom: 12,
    padding: 12,
    borderColor: "gray",
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  creationButton: {
    width: "90%",
    height: 56,
    backgroundColor: "#06A94D",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    borderRadius: 12,
  },
});
