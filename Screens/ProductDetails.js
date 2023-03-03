import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
} from "react-native";
import { Products } from "../src/Product"; //Products JSON
import { AntDesign } from "@expo/vector-icons"; //Expo Icons
import AsyncStorage from "@react-native-async-storage/async-storage"; //Async Storage Component
import { FlashList } from "@shopify/flash-list";

export default function ProductDetatil({ route, navigation }) {
  const { width } = useWindowDimensions(); //Width Dimension of the Device

  const addToCart = async (id) => {
    let ItemArray = await AsyncStorage.getItem("cartItem");
    ItemArray = JSON.parse(ItemArray);
    if (ItemArray) {
      let array = ItemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem("cartItem", JSON.stringify(array));
        Alert.alert("Success", "Product added to Cart");
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItem", JSON.stringify(array));
        Alert.alert("Success", "Product added to Cart");
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    }
  }; // Data Storage to display in Cart

  const { ProductId } = route.params; //Serach the ID of the product from the JSON

  const [product, setproduct] = useState({}); //Product State

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromJson();
    });

    return unsubscribe;
  }, [navigation]); //Get the data from the JSON once

  const getDataFromJson = async () => {
    for (let index = 0; index < Products.length; index++) {
      if (Products[index].id === ProductId) {
        setproduct(Products[index]);
        return;
      }
    }
  }; //Search for an specific ID then update the product states

  const [count, setcount] = useState(1); //Product Counter State

  const RenderProduct = () => {
    const [price, setprice] = useState(product.price * count); //Product Price State

    return (
      <View>
        {/* Carrousel of Images*/}
        <FlashList
          data={product.ImageCarrousel}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, height: 300, resizeMode: "contain" }}
            />
          )}
          pagingEnabled={true}
          estimatedItemSize={50}
        />
        {/* Product Content */}
        <View style={styles.ProductContent}>
          <Text style={styles.CardCategory}>{product.category}</Text>
          <Text style={styles.ProductName}>{product.name}</Text>
          <View style={styles.ProductPriceContainer}>
            <Text style={styles.ProductPrice}>${price} </Text>
            <TouchableOpacity onPress={() => setcount(count + 1)}>
              <AntDesign name="pluscircleo" size={23} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 17, marginLeft: 10, marginRight: 10 }}>
              {count}
            </Text>
            <TouchableOpacity onPress={() => setcount(count - 1)}>
              <AntDesign name="minuscircleo" size={23} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.ProductDescription}>{product.description}</Text>
        </View>
      </View>
    );
  }; //Product to Render

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderProduct />
      </ScrollView>
      <View style={styles.BuyButtonContainer}>
        <TouchableOpacity
          style={styles.BuyButton}
          onPress={() => {
            addToCart(product.id);
          }}
        >
          <Text style={styles.BuyButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
} //Screen Container

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ImageContiner: {
    alignItems: "center",
    width: "100%",
  },
  ProductContent: {
    marginTop: 15,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "#12121212",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  CardCategory: {
    color: "grey",
    marginBottom: 5,
  },
  ProductName: {
    fontSize: 18,
  },
  ProductPriceContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  ProductPrice: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    marginRight: 10,
  },
  ProductDescription: {
    fontSize: 15,
    marginTop: 30,
    lineHeight: 23,
  },
  BuyButtonContainer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  BuyButton: {
    backgroundColor: "black",
    width: "70%",
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  BuyButtonText: {
    fontSize: 15,
    color: "#fff",
  },
});
