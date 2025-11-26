import { ApiResponse } from "../../dtos/ApiResponse.dto";
import ProductoDto from "../../dtos/Producto.dto";

import ApiClient from "./ApiClient";

class ProductosService {
  async consultarProductos(): Promise<ProductoDto[]> {
    const response = await ApiClient.get<ProductoDto[]>("/productos");
    console.log("RESPONSE COMPLETO:", response.statusCode); // 👈 IMPORTANTE
    console.log("RESPONSE.DATA:", response.data); // 👈 IMPORTANTE

    return response.data;
  }

  async guardarProducto() {
    return ApiClient.post("/Productos");
  }
}

export default new ProductosService();
