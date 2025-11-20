import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Screen({ children }) {
  const insets = useSafeAreaInsets();
  return <View className="flex-1 bg-white pt-4 px-2 ">{children}</View>;
}
