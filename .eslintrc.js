module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    // "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier"],
  rules: {
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
  },
};
