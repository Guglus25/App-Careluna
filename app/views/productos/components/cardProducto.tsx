import { Image, StyleSheet, Text, View } from "react-native";
import { UserIcon } from "../../../../components/Icons";
import { colors } from "../../../../constants/theme";
import ProductoDto from "../../../dtos/Producto.dto";
import { BASE_URL } from "../../../lib/api/ApiClient";

interface CardProductoProps {
  Product: ProductoDto;
  onPress?: () => void;
}

export default function CardProducto({ Product, onPress }: CardProductoProps) {
  return (
    <View className="bg-neutro-medio rounded-xl p-4 flex-row items-center justify-between mx-2 my-2">
      {/* Lado izquierdo: Avatar + Info */}
      <View className="flex-row items-center flex-1">
        {/* Avatar circular */}
        <Image
          source={{ uri: `${BASE_URL}${Product.pro_imagen}` }}
          style={styles.imgProduc}
        />

        {/* Nombre y documento */}
        <View>
          <Text className="text-primary font-semibold text-lg">
            {Product.pro_Nombre}
          </Text>
        </View>
      </View>

      {/* Lado derecho: Total */}
      <View className="items-end">
        <Text className="text-primary text-lg mb-1">Precio</Text>
        <Text className="text-primary font-bold text-lg">
          {Product.pro_Precio}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgProduc: {
    width: 100,
    height: 100,
    borderRadius: 70, // redondeado total
    marginRight: 10,
    resizeMode: "cover",

    // Sombras (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    // Sombras (Android)
    elevation: 8,
  },
});
