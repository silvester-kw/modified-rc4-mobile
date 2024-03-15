import React from "react";
import { View, TouchableOpacity, ImageBackground, Text, StyleSheet } from "react-native";

const MenuScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground source={require("../public/arle.png")} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Modified RC4</Text>
          <Text style={styles.subtitle}>by</Text>
          <Text style={styles.subtitle}>18221049 Silvester Kresna W. P. P.</Text>
          <Text style={styles.subtitle}>18221080 Fakhri Putra Mahardika</Text>
          <Text style={styles.break}>---</Text>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EncryptText")}>
              <Text style={styles.buttonText}>Text Encryption</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EncryptFile")}>
              <Text style={styles.buttonText}>File Encryption</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DecryptText")}>
              <Text style={styles.buttonText}>Text Decryption</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DecryptFile")}>
              <Text style={styles.buttonText}>File Decryption</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain' for different resizing options
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "1000",
    marginBottom: 16,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  break: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 32,
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MenuScreen;
