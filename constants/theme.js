import tailwindConfig from "../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

// Exporta los colores que necesites
export const colors = {
  primary: fullConfig.theme.colors.primary,
  secondary: fullConfig.theme.colors.secondary,
  "neutro-claro": fullConfig.theme.colors["neutro-claro"],
  "neutro-medio": fullConfig.theme.colors["neutro-medio"],
  success: fullConfig.theme.colors.success,
  danger: fullConfig.theme.colors.danger,
  warning: fullConfig.theme.colors.warning,
};

// También puedes exportar otras configuraciones
export const spacing = fullConfig.theme.spacing;
export const fontSize = fullConfig.theme.fontSize;

// O exporta todo el config si lo necesitas
export const theme = fullConfig.theme;
