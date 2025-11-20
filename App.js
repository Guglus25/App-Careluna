import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Main } from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "nativewind";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const logo = require("./assets/logo.png");

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
