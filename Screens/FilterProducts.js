import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FlashList } from "@shopify/flash-list";
import { Products } from "../src/Product";

export default function FilterProducts({ route, navigation }) {
  const { ProductCategory } = route.params; //Serach the Category of the product from the JSON

  const { ProductId } = route.params; //Serach the ID of the product from the

  const [product, setproduct] = useState({}); //Product State

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromJson();
    }); //Get the data from the JSON once

    return unsubscribe;
  }, [navigation]);

  const getDataFromJson = async () => {
    for (let index = 0; index < Products.length; index++) {
      if (
        Products[index].category === ProductCategory &&
        Products[index].id === ProductId
      ) {
        setproduct(Products[index]);
        return;
      }
    }
  }; //Search for an specific ID and Category then update the product states

  const ProductFilterCard = () => {
    return (
      <View style={styles.CardContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Product Details", { ProductId: Products.id })
          }
        >
          <View style={styles.ImageContainer}>
            <Image
              source={product.Image}
              style={{
                width: 300,
                height: 220,
                resizeMode: "contain",
                marginBottom: 30,
              }}
            />
          </View>
          <Text style={styles.CardCategory}>{product.category} </Text>
          <Text numberOfLines={2} style={styles.CardName}>
            {product?.name}
          </Text>
          <Text style={styles.CardPrice}>${product.price}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.Container}>
      <FlashList
        data={Products}
        keyExtractor={Products.category}
        renderItem={({ item }) => <ProductFilterCard Products={item} />}
        estimatedItemSize={50}
      />
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
