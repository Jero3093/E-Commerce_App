import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Screens/Home"; //Home Screens
import CartScreen from "../../Screens/Cart"; // Cart Screen
import ProductDetails from "../../Screens/ProductDetails"; // Product Details Screen
import FilterProducts from "../../Screens/FilterProducts"; // Filter Products Screen
import CartModal from "../../Screens/CartModal"; // Cart Modal Screen
import SearchScreen from "../../Screens/SearchScreen"; // Search Screen

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cart Modal"
          component={CartModal}
          options={{
            animation: "slide_from_bottom",
            headerShown: false,
            presentation: "formSheet",
          }}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetails}
          options={{
            headerTintColor: "#121212",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Filter"
          component={FilterProducts}
          options={{
            headerTintColor: "#121212",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
