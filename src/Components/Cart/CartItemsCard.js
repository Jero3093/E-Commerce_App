import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; //Expo Icons
import { CartSlice } from "../../Store/CartSlice"; //Cart Slice Component
import { useDispatch } from "react-redux"; //Redux Selector - Dispatch Component

export const CartItemsCard = ({ Data }) => {
  const Dispatch = useDispatch(); //Redux Dispatch Function

  const IncrimentQuantity = () => {
    Dispatch(
      CartSlice.actions.ChangeQuantity({ ProductID: Data, Quantity: 1 })
    );
  }; //Function to Increase the quantity of the Product in the Cart passing the Data of the Product and the Amount of the Quantity to increase

  const DecreseQuantity = () => {
    Dispatch(
      CartSlice.actions.ChangeQuantity({ ProductID: Data, Quantity: -1 })
    );
  }; //Function to Decrese the quantity of the Product in the Cart passing the Data of the Product and the Amount of the Quantity to decrease

  return (
    <View style={styles.ProductsContainer}>
      <Image
        source={Data.Image}
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
          marginRight: 5,
        }}
      />
      <View style={styles.ProductContent}>
        <Text numberOfLines={2} style={styles.ProductName}>
          {Data.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={DecreseQuantity}>
              <AntDesign name="minuscircleo" size={22} color="black" />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10, fontSize: 17 }}>
              {Data.quantity}
            </Text>
            <TouchableOpacity onPress={IncrimentQuantity}>
              <AntDesign name="pluscircleo" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 15,
              marginRight: 20,
              fontWeight: "600",
            }}
          >
            $ {Data.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ProductsContainer: {
    marginHorizontal: 5,
    marginBottom: 10,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
  },
  ProductContent: {
    width: 290,
    overflow: "hidden",
  },
  ProductName: {
    marginBottom: 40,
  },
});
