import { useEffect, useRef } from "react";
import { View, Animated, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { Screen } from "../components/Screen";

export default function SplashScreen() {
  const router = useRouter();

  // Animaciones
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.8)).current;
  const fadeText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Secuencia animada: logo → texto → navegación
    Animated.sequence([
      // Logo con fade + zoom
      Animated.parallel([
        Animated.timing(fadeLogo, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.spring(scaleLogo, {
          toValue: 1,
          friction: 4,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      // Luego texto con fade-in
      Animated.timing(fadeText, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Redirige después de 3 segundos
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LinearGradient colors={["#0D1B2A", "#1B2A49"]} style={styles.container}>
        <Animated.Image
          source={require("../assets/logo.png")}
          style={[
            styles.logo,
            {
              opacity: fadeLogo,
              transform: [{ scale: scaleLogo }],
            },
          ]}
          resizeMode="contain"
        />

        <Animated.Text style={[styles.text, { opacity: fadeText }]}>
          Bienvenido
        </Animated.Text>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    letterSpacing: 1,
  },
});
