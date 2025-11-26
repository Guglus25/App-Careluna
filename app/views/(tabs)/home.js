import { Button, Pressable, Text, View } from "react-native";
import { Screen } from "../../../components/Screen";
import { ProductoIcon, VentaIcon } from "../../../components/Icons";
import { styled } from "nativewind";
import tailwindConfig from "../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import { Link } from "expo-router";

const fullConfig = resolveConfig(tailwindConfig);
const primary = fullConfig.theme.colors.primary;
const StyledPressable = styled(Pressable);
export default function Home() {
  return (
    <Screen>
      <View className="flex flex-row justify-between">
        {/* BOTON PARA LAS VENTAS DIARIAS  */}
        <Link asChild href={"/views/ventas"}>
          <StyledPressable className={`active:opacity-50 `}>
            <View className="w-24 h-24 shadow-xl/30 bg-neutro-medio items-center justify-center rounded-2xl">
              <VentaIcon size={40} color={primary} />
            </View>
          </StyledPressable>
        </Link>
        {/* BOTON PARA EL LISTADO DE PEDIDOS  */}
        <Link asChild href={"/views/productos/productos"}>
          <StyledPressable className={`active:opacity-50 `}>
            <View className="w-24 h-24 shadow-xl/30 bg-neutro-medio items-center justify-center rounded-2xl">
              <ProductoIcon size={40} color={primary} />
            </View>
          </StyledPressable>
        </Link>

        <View className="w-24 h-24 bg-neutro-medio items-center justify-center rounded-2xl">
          <Text className="text-white">3</Text>
        </View>
      </View>
    </Screen>
  );
}
