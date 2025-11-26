import { Tabs } from "expo-router";
import { ClienteIcon, HomeIcon, PedidoIcon } from "../../../components/Icons";
import tailwindConfig from "../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import { StyleSheet, View } from "react-native";

const fullConfig = resolveConfig(tailwindConfig);
const primary = fullConfig.theme.colors.primary;
export default function TabsLayout() {
  return (
    // <View style={styles.container}>
    // <View style={styles.tabBarShadow}>
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
          tabBarActiveTintColor: primary,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Inicio",
            tabBarIcon: ({ color }) => <HomeIcon color={color} size={28} />,
          }}
        />
        <Tabs.Screen
          name="pedidos"
          options={{
            title: "Pedidos",
            tabBarIcon: ({ color }) => <PedidoIcon color={color} size={28} />,
          }}
        />
        <Tabs.Screen
          name="clientes"
          options={{
            title: "Clientes",
            tabBarIcon: ({ color }) => <ClienteIcon color={color} size={28} />,
          }}
        />
      </Tabs>
    </>
    // </View>
    // </View>
  );
}
