import MaterialBottomTabNavigator from "./src/navigation/MaterialBottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MaterialBottomTabNavigator />
    </NavigationContainer>
  </Provider>
  );
}
