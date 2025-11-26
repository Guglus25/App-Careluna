import { LinearGradient } from "expo-linear-gradient";
import { Slot, Stack } from "expo-router";
import { Image, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient className="flex-1" colors={["#0D1B2A", "#1B2A49"]}>
      <View className="flex-1">
        <Stack
          screenOptions={{
            statusBarStyle: "light",
            headerTitle: "",
            headerTintColor: "white",
            headerBackground: () => (
              <LinearGradient
                colors={["#0D1B2A", "#1B2A49"]}
                style={{ flex: 1 }}
              />
            ),
            headerLeft: () => (
              <View>
                <Image
                  source={require("../../assets/logo.png")}
                  style={{ width: 40, height: 40, resizeMode: "contain" }}
                ></Image>
              </View>
            ),
          }}
        />
      </View>
    </LinearGradient>
  );
}
