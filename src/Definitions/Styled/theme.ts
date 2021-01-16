import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const lightTheme = {
  colors: {
    primary: "#2c3e50",
    mainBackground: "#212530",
    success: "#219653",
    fontAdditional: "#031925",
    fontMain: "#031925",
    buttonMain: "#2D9CDB",
    buttonAdditional: "#FFFFFF",
    buttonMainColor: "#fff",
    text: "#fff",
  },
};

const darkTheme: Theme = {
  colors: {
    primary: "#2D9CDB",
    mainBackground: "#212530",
    success: "#219653",
    fontAdditional: "#031925",
    fontMain: "#FFFFFF",
    buttonMain: "#2D9CDB",
    buttonAdditional: "#FFFFFF",
    buttonMainColor: "#fff",
    text: "#fff",
  },
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  dimensions: {
    screenWidth,
    screenHeight,
  },
};
