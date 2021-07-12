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
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { StatusBar, Linking } from "react-native";
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

// aws setup
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import InAppBrowser from "react-native-inappbrowser-reborn";
import { Auth, Hub } from "aws-amplify";
import { CognitoUser, CognitoUserSession } from "@aws-amplify/auth";

const urlOpener = async (url: string, redirectUrl: string) => {
  console.log(url, redirectUrl);
  await InAppBrowser.isAvailable();
  const response = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (response.type === "success") {
    Linking.openURL(response.url);
  }
};

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
  oauth: {
    ...awsconfig.oauth,
    urlOpener,
  },
});
// Configure Store
const store = configureStore({});
const RootStack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    I18n.init();
    BootSplash.hide();
  }, []);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          getUser().then((userData) => {
            setUser(userData);
            console.log(userData);
          });
          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
      }
    });
    getUser().then((userData) => setUser(userData));
  }, []);

  const getUser = () => {
    return Auth.currentAuthenticatedUser()
      .then((userData) => {
        return userData;
      })
      .catch(() => console.log("Not signed in"));
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.dark}>
        <AndtProvider>
          <StatusBar barStyle="light-content" />
          <NavigationContainer>
            <RootStack.Navigator
              initialRouteName="GetStarted"
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
