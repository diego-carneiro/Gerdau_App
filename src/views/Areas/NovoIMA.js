import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Modalize } from "react-native-modalize";

import Button from "../../components/Button";

export default function NovoIMA({ navigation }) {
  const [groupName, setGroupName] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState(null);

  const saveName = () => {
    console.log("saved");
  };

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

    setText(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const modalizeRef = useRef(null);

  function triggerModal() {
    modalizeRef.current?.open();
  }

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

      {/* <Text style={{ fontWeight: "bold", fontSize: 20 }}>{text}</Text> */}
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
        buttonType={2}
        buttonText={"INSERIR DESVIOS NOVOS"}
        buttonNavigation={"Novo Desvio"}
      />
      <Button
        navigation={navigation}
        buttonType={2}
        buttonText={"ALTERAR DESVIOS ANTERIORES"}
      />
      <Button buttonType={1} buttonText={"SALVAR"} onPress={() => saveName()} />
      <Modalize ref={modalizeRef} snapPoint={600}>
        <Text>pinto cu buceta</Text>
      </Modalize>
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
});
