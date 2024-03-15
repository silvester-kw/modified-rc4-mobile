import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EncryptText from "./pages/EncryptText";
import DecryptText from "./pages/DecryptText";
import EncryptFile from "./pages/EncryptFile";
import DecryptFile from "./pages/DecryptFile";
import Home from "./pages/Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EncryptText" component={EncryptText} />
        <Stack.Screen name="DecryptText" component={DecryptText} />
        <Stack.Screen name="EncryptFile" component={EncryptFile} />
        <Stack.Screen name="DecryptFile" component={DecryptFile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
