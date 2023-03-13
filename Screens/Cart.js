import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; //Expo Icons
import { useSelector } from "react-redux"; //Redux Selector - Dispatch Component
import { CartItemsCard } from "../src/Components/Cart/CartItemsCard"; //Cart Items Card Component
import { GetTotal } from "../src/Store/CartSlice"; //Total Pirce Function from CartSlice Component

export default function CartScreen({ navigation }) {
  const cartItems = useSelector((state) => state.CartItems.items); //Function to bring the Items from the Global State

  const Total = useSelector(GetTotal); //Get the Total Price with the Function in the Cart Slice

  const PaymentButton = () => {
    if (cartItems.length <= 0) {
      return;
    } else {
      return (
        <TouchableOpacity
          style={styles.BuyBotton}
          onPress={() => navigation.navigate("Cart Modal")}
        >
          <Text style={styles.BottonText}>Finish Payment</Text>
        </TouchableOpacity>
      );
    }
  }; //If the lenght of the array of Items Global is lower or equal to 0 it will just return, but if the lenght of the array is higher than 0 it will display the Button to Finish the Payment

  return (
    <SafeAreaView style={styles.Container}>
      {/* Header */}
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="md-chevron-back-outline" size={33} color="black" />
        </TouchableOpacity>
        <Text style={styles.HeaderTitle}>Cart</Text>
      </View>
      {/* List of Cart Items */}
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItemsCard Data={item} />}
        ListFooterComponent={() => {
          return (
            <View
              style={{
                borderTopWidth: StyleSheet.hairlineWidth,
                borderColor: "#303030",
                marginHorizontal: 10,
              }}
            >
              <Text style={styles.Footer}>Total: ${Total} </Text>
            </View>
          );
        }}
      />
      {/* Payment Button */}
      <PaymentButton />
    </SafeAreaView>
  );
} //Screen Container

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#CDCDCD",
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: 19,
    marginBottom: 10,
  },
  HeaderTitle: {
    fontSize: 19,
    fontWeight: "600",
  },
  Footer: {
    fontSize: 18,
    marginVertical: 20,
    alignSelf: "flex-end",
  },
  BuyBotton: {
    alignItems: "center",
    width: "70%",
    backgroundColor: "#121212",
    padding: 10,
    borderRadius: 50,
    alignSelf: "center",
  },
  BottonText: {
    color: "#fff",
    fontSize: 17,
  },
});
