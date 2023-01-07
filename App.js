import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home.js";
import CartScreen from "./Screens/Cart.js";
import ProductDetails from "./Screens/ProductDetails.js";
import FilterProducts from "./Screens/FilterProducts.js";
import CartModal from "./src/Components/CartModal.js";

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
          options={{ animation: "slide_from_bottom", headerShown: false,  }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
