// Global Imports
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// #region Local Imports
import GetStarted from "../../../../scenes/GetStarted";
import LoginScreen from "../../../../scenes/Login";
// #endregion Local Imports

const AppStackNavigator = createStackNavigator(
  {
    GetStarted: {
      navigationOptions: () => ({
        title: "GetStarted",
        headerShown: false,
        cardStyle: { backgroundColor: "transparent" },
      }),
      screen: GetStarted,
    },
    LoginScreen: {
      navigationOptions: () => ({
        title: "LoginScreen",
        headerShown: false,
        cardStyle: { backgroundColor: "transparent" },
      }),
      screen: LoginScreen,
    },
  },
  { initialRouteName: "GetStarted" },
);

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
