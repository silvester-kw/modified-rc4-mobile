import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { rc4EncryptModified } from "../rc4";

const EncryptText = () => {
  const [plainText, setPlainText] = useState("");
  const [key, setKey] = useState("");
  const [outputData, setOutputData] = useState("");

  const encrypt = () => {
    rc4EncryptModified(plainText, key);
    setOutputData(rc4EncryptModified(plainText, key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>UNDER MAINTENANCE</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Plain Text:</Text>
        <TextInput multiline={true} numberOfLines={5} style={styles.textInput} placeholder="Enter text to encrypt/decrypt" value={plainText} onChangeText={setPlainText} />
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
