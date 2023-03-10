import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux"; //Redux Selector, Dispatch Component
import { ProductSlice } from "../src/Store/ProductSlice"; //Product Slice Component

export default function FilterProducts({ navigation }) {
  const dispatch = useDispatch(); //Dispatch Function

  const Product = useSelector((state) => state.products.SelectedCategory); //Get all the elements of the Selected Categories state of the Store

  return (
    <View style={styles.Container}>
      <View style={styles.CardContainer}>
        <TouchableOpacity
          onPress={() => {
            //Update the Selected Product State with the Product ID
            dispatch(ProductSlice.actions.setSelectedProduct(Product.id));
            navigation.navigate("Product Details");
          }}
        >
          <View style={styles.ImageContainer}>
            <Image
              source={Product.Image}
              style={{
                width: 300,
                height: 220,
                resizeMode: "contain",
                marginBottom: 30,
              }}
            />
          </View>
          <Text style={styles.CardCategory}>{Product.category} </Text>
          <Text numberOfLines={2} style={styles.CardName}>
            {Product.name}
          </Text>
          <Text style={styles.CardPrice}>${Product.price}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#12121212",
  },
  CardContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "column",
    padding: 15,
    marginBottom: 30,
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#A0A0A0",
  },
  ImageContainer: {
    alignItems: "center",
  },
  CardCategory: {
    color: "grey",
    marginBottom: 5,
  },
  CardName: {
    fontSize: 20,
    marginBottom: 10,
  },
  CardPrice: {
    fontSize: 18,
    marginBottom: 10,
  },
});
