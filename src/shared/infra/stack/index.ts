// Global Imports
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Local Imports
import GetStarted from "../../../../scenes/GetStarted";

const AppStackNavigator = createStackNavigator(
  {
    GetStarted: {
      navigationOptions: () => ({
        title: "GetStarted",
        // headerStyle: {
        //   backgroundColor: theme.colors.primary,
        // },
        // headerTintColor: "#fff",
        headerShown: false,
        cardStyle: { backgroundColor: "transparent" },
      }),
      screen: GetStarted,
    },
  },
  { initialRouteName: "GetStarted" },
);

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
