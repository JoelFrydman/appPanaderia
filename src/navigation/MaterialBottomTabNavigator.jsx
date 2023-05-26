import { StyleSheet, Text, View } from "react-native";

import CartNavigator from "./CartNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import OrdersNavigator from "./OrdersNavigator";
import ShopNavigator from "./ShopNavigator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default MaterialBottomTabNavigator = () => {
  return (
    <MaterialBottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <MaterialBottomTabs.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="home" size={30} color="black" />
            </View>
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="list" size={30} color="black" />
            </View>
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    paddingTop: 15,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    height: 85,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});