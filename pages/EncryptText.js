import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { rc4EncryptModified } from "../rc4";
import { FileSystem } from "expo-file-system";

const EncryptText = () => {
  const [plainText, setPlainText] = useState("");
  const [key, setKey] = useState("");
  const [outputData, setOutputData] = useState("");

  const encrypt = () => {
    const encryptedText = rc4EncryptModified(plainText, key);
    setOutputData(encryptedText);
  };

  const downloadText = async () => {
    if (!outputData) {
      alert("Please encrypt text first!");
      return;
    }
    try {
      const directory = FileSystem.documentDirectory;
      const filename = "encrypted_text.txt";

      try {
        const directory = FileSystem.documentDirectory;
        const newFile = await FileSystem.writeAsync(`${directory}${filename}`, outputData, { encoding: FileSystem.EncodingType.UTF8 });

        alert(`Text downloaded successfully to ${newFile.uri}`);
      } catch (error) {
        console.error("Error downloading text:", error);
        alert("An error occurred while downloading the text.");
      }
    } catch (error) {
      alert("An error occurred while downloading the text.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Text Encryption</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Plain Text:</Text>
        <TextInput multiline={true} numberOfLines={5} style={styles.textInput} placeholder="Enter text to encrypt" value={plainText} onChangeText={setPlainText} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Key:</Text>
        <TextInput style={styles.textInput} placeholder="Enter secret key" value={key} onChangeText={setKey} />
      </View>
      <Button title="Encrypt" onPress={encrypt} />
      <View style={styles.outputContainer}>
        <Text style={styles.label}>Result:</Text>
        <TextInput multiline={true} numberOfLines={5} style={styles.textInput} value={outputData} editable={false} />
      </View>
      <Button style={styles.button} title="Download Encrypted Text" onPress={downloadText} disabled={!outputData} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  outputContainer: {
    marginTop: 20,
  },
});

export default EncryptText;
