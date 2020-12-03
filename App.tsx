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
import { StyleSheet, Text, StatusBar, ImageBackground } from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { ThemeProvider } from "styled-components/native";
// #endregion Global Imports

// #region Local Imports
import { themes } from "./src/Definitions/Styled";
import { SafeArea, ContainerCenter } from "@Styled";
import { I18n } from "./src/I18n";
declare const global: { HermesInternal: null | {} };
// #region Local Imports

const App = () => {
  useEffect(() => {
    I18n.init();
  }, []);

  const bgStart = require("./static/images/bg/start.png");
  return (
    <ThemeProvider theme={themes.dark}>
      <StatusBar barStyle="light-content" />
      <ImageBackground style={styles.image} source={bgStart}>
        <SafeArea>
          <ContainerCenter>
            <Text> fdf df </Text>
          </ContainerCenter>
        </SafeArea>
      </ImageBackground>
    </ThemeProvider>
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
