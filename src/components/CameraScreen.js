import React, { useState, useEffect, useRef, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,

  
} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "../contexts/auth";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const { imageArray, imageCode, setImageCode, setImageArray } =
    useContext(AuthContext);
  const camRef = useRef(null);

  function triggerAlert() {
    setTimeout(() => {
      Alert.alert("Captura de Imagem", `Imagem de desvio salva.`);
    }, 3000);
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  console.log(imageCode, "AQUI MESMO");
  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso Negado.</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setImageCode(data.uri);
    }

    console.log("PASSOU AQUI");
    setImageArray([...imageArray, imageCode]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ref={camRef}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          takePicture(), triggerAlert();
        }}
      >
        <FontAwesome name="camera" size={22} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E97F3",
    margin: 12,
    borderRadius: 12,
    height: 50,
  },
});
