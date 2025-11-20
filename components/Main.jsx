import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
  const logo = require("../assets/logo.png");
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.wrapper,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Image source={logo} style={{ width: 200, height: 200 }}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // permite el centrado vertical por el padre
    alignItems: "center",
    justifyContent: "center",
  },
  colorTextotitulo: {
    color: "#ffffff",
    fontSize: 40,
  },
  colorTexto: {
    color: "#ffffff",
    fontSize: 20,
  },
});
