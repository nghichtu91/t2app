/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// #region Global Imports
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { StyleSheet, StatusBar, ImageBackground } from "react-native";
import { ThemeProvider } from "styled-components/native";
import BootSplash from "react-native-bootsplash";
// #endregion Global Imports

// #region Local Imports
import { themes } from "@Definitions/Styled";
import { SafeArea } from "@Styled";
import { I18n } from "./src/shared/infra/i18n";
import { configureStore } from "./src/shared/infra/redux/configureStore";
import AppContainer from "./src/shared/infra/stack";
// declare const global: { HermesInternal: null | {} };
// #region Local Imports

// Configure Store
const store = configureStore({});

const App = () => {
  useEffect(() => {
    I18n.init();
    BootSplash.hide();
  }, []);

  const bgStart = require("./static/images/bg/start.png");
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.dark}>
        <StatusBar barStyle="light-content" />
        <ImageBackground style={styles.image} source={bgStart}>
          <SafeArea>
            <AppContainer
            // ref={(ref: object) => RouterActions.setNavigationReference(ref)}
            />
          </SafeArea>
        </ImageBackground>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});
