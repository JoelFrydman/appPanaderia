import MaterialBottomTabNavigator from "./src/navigation/MaterialBottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MaterialBottomTabNavigator />
    </NavigationContainer>
  );
}
