import { Pressable, Text, TextInput, View } from "react-native";
import { Screen } from "../../../components/Screen";
import { SearchIcon, UserIcon } from "../../../components/Icons";
import { colors } from "../../../constants/theme";
import { styled } from "nativewind";
import { Link } from "expo-router";

const StyledPresseble = styled(Pressable);

export default function Pedidos() {
  return (
    <Screen>
      <View className="flex-1  text-center  ">
        <View className="items-center ">
          <Link asChild href={"/"}>
            <StyledPresseble className=" active:opacity-50 w-40 bg-primary rounded-xl p-4 items-center mx-2 my-2">
              <View>
                <Text className="text-neutro-claro">Nuevo pedido</Text>
              </View>
            </StyledPresseble>
          </Link>
        </View>

        {/* CAJA DE TEXTO PARA BUSCAR LOS PEDIDOS DE LOS CLIENTES  */}
        <View className="flex-row items-center mb-3 p-1 rounded-xl border border-gray-400">
          <SearchIcon size={20} color="#666" className="px-2" />
          <TextInput
            className="w-full text-primary "
            style={{ fontSize: 16 }}
            placeholder="cliente"
          />
        </View>

        <Text className="text-primary text-xl font-bold px-4 mb-3">
          Historial de pedidos
        </Text>
        <View className="bg-neutro-medio rounded-xl p-4 flex-row items-center justify-between mx-2 my-2">
          {/* Lado izquierdo: Avatar + Info */}
          <View className="flex-row items-center flex-1">
            {/* Avatar circular */}

            <UserIcon
              size={50}
              color={colors.primary}
              className=" items-center justify-center mr-3"
            />

            {/* Nombre y documento */}
            <View>
              <Text className="text-primary font-semibold text-base">
                Cristian felipe jaramillo medina
              </Text>
              <Text className="text-primary text-sm">yyyy/mm/dd</Text>
            </View>
          </View>

          {/* Lado derecho: Total */}
          <View className="items-end">
            <Text className="text-primary text-xs mb-1">Total</Text>
            <Text className="text-primary font-bold text-lg">0.000</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
}
