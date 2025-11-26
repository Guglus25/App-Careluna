import { useEffect, useState } from "react";

import ProductosService from "../../lib/api/ProductosService";
import { Screen } from "../../../components/Screen";
import { Link, Stack } from "expo-router";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { SearchIcon, UserIcon } from "../../../components/Icons";
import { styled } from "nativewind";
import { colors } from "../../../constants/theme";
import CardProducto from "./components/cardProducto";
import ProductoDto from "../../dtos/Producto.dto";
import { ApiResponse } from "../../dtos/ApiResponse.dto";

const StyledPresseble = styled(Pressable);

export default function Productos() {
  const [ListProducto, setListProducto] = useState<ProductoDto[]>([]);

  const cargarProductos = async () => {
    const Resp = await ProductosService.consultarProductos();
    console.log("LISTA RECIBIDA EN EL COMPONENTE:", Resp);
    setListProducto(Resp);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerTitle: "Productos",
          headerTintColor: "white",
          headerRight: () => null,
          headerLeft: () => null,
        }}
      />
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
            placeholder="Producto"
          />
        </View>

        <Text className="text-primary text-xl font-bold px-4 mb-3">
          Listado de Productos
        </Text>

        <FlatList
          data={ListProducto}
          keyExtractor={(item) => item.pro_Id.toString()}
          renderItem={({ item }) => <CardProducto Product={item} />}
        />
      </View>
    </Screen>
  );
}
