module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          //"@Actions": "./src/Actions",
          //"@Components": "./src/Components",
          "@Styled": "./src/Styled",
          "@Definitions": "./src/Definitions",
          //"@Interfaces": "./src/Interfaces",
          "@I18n": ["./src/I18n"],
          "@I18n1": ["./src/I18n1"],
          //"@Router": "./src/Router",
          //"@Services": "./src/Services",
          //"@Redux": "./src/Redux",
          //"@Scenes": "./scenes",
        },
      },
    ],
  ],
};
