import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../contexts/auth";

import Button from "../components/Button";

export default function History() {
  const { listaDeDesvios } = useContext(AuthContext);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@IMA_Array", JSON.stringify(listaDeDesvios))
    } catch (ev) {

    }
  }

  const getData = async () => {
    try {
      const IMAArray = await AsyncStorage.getItem("@IMA_Array");

      if (value !== null) {
        const data = JSON.parse(IMAArray);
        console.log(data);
        return data;
      }


      

    } catch (ev) {

    }
  }

  useEffect(() => {
    storeData();
    getData();
  }, []);

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

