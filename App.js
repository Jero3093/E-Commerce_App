import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home.js"; //Home Screens
import CartScreen from "./Screens/Cart.js"; // Cart Screen
import ProductDetails from "./Screens/ProductDetails.js"; // Product Details Screen
import FilterProducts from "./Screens/FilterProducts.js"; // Filter Products Screen
import CartModal from "./Screens/CartModal.js"; // Cart Modal Screen
import SearchScreen from "./Screens/SearchScreen.js"; // Search Screen

const Stack = createNativeStackNavigator();

function MyStack() {
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

export default MyStack;
