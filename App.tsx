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
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import BootSplash from "react-native-bootsplash";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as AndtProvider } from "@ant-design/react-native";
// #endregion Global Imports

// #region Local Imports
import { themes } from "@Definitions/Styled";
import { I18n } from "./src/shared/infra/i18n";
import { configureStore } from "./src/shared/infra/redux/configureStore";
import GetStarted from "./scenes/GetStarted";
import LoginScreen from "./scenes/Login";
// #region Local Imports

// Configure Store
const store = configureStore({});
const RootStack = createStackNavigator();

const App = () => {
  useEffect(() => {
    I18n.init();
    BootSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.dark}>
        <AndtProvider>
          <StatusBar barStyle="light-content" />
          <NavigationContainer>
            <RootStack.Navigator
              initialRouteName="LoginScreen"
              headerMode="screen">
              <RootStack.Screen
                options={{
                  headerShown: false,
                  cardStyle: { backgroundColor: "transparent" },
                }}
                name="GetStarted"
                component={GetStarted}
              />
              <RootStack.Screen
                options={{
                  headerShown: false,
                  cardStyle: { backgroundColor: "transparent" },
                }}
                name="LoginScreen"
                component={LoginScreen}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </AndtProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
