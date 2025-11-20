import { Stack } from "expo-router";
import { View } from "react-native";

export default function Ventas() {
  return (
    <Stack.Screen
      options={{
        name: "pedidos",

        headerTitle: "Pedidos",
        headerTintColor: "white",
        headerTitleStyle: {
          textAlign: "center",
          flex: 1,
          alignSelf: "center",
        },
        headerRight: () => {},
        headerLeft: () => {},
      }}
    >
      <View></View>
    </Stack.Screen>
  );
}
