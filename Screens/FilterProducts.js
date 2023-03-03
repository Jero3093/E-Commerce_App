import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Products } from "../src/Product"; //Products Database
import { FlashList } from "@shopify/flash-list"; //Flash List Component
import { FilteredProductCard } from "../src/Components/FilterScreen/FilteredProductCard"; //Filtered Product Card Component

export default function FilterProducts({ route, navigation }) {
  const { CategoryName } = route.params; //Serach the Category of the product from the JSON

  const [product, setproduct] = useState({}); //Product State

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromJson();
    }); //Get the data from the JSON once

    return unsubscribe;
  }, [navigation]);

  const getDataFromJson = () => {
    for (let index = 0; index < Products.length; index++) {
      if (Products[index].category === CategoryName) {
        setproduct(Products[index]);
      }
    }
  }; //Search for an specific ID and Category then update the product states

  return (
    <View style={styles.Container}>
      <FilteredProductCard Data={product} />
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
