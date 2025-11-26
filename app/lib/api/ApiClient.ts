import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
export const BASE_URL = "http://10.0.2.2:5030";
const ApiClient = axios.create({
  baseURL: BASE_URL, // <-- cambia esto
  timeout: 15000,
});

// =======================
// INTERCEPTOR REQUEST
// =======================
ApiClient.interceptors.request.use(
  async (config) => {
    // Si en el futuro usas tokens:
    // const token = await AsyncStorage.getItem("token");

    const token = null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// =======================
// INTERCEPTOR RESPONSE
// =======================
// Tu API devuelve: { statusCode, message, data, errors }
ApiClient.interceptors.response.use(
  (response) => {
    return response.data; // aquí ya NO tendrás que hacer .data en tu app
  },
  (error) => {
    if (error.response) {
      console.log("❌ Error Status:", error.response.status);
      console.log("❌ Error Data:", error.response.data);
    } else {
      console.log("❌ Network error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default ApiClient;
