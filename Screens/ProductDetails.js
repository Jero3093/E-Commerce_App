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
} from "react-native";
import { Products } from "../src/Product"; //Products JSON
import { AntDesign } from "@expo/vector-icons"; //Expo Icons

export default function ProductDetatil({ route, navigation }) {
  const { ProductId } = route.params; //Serach the ID of the product from the JSON

  const [product, setproduct] = useState({}); //Product State

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromJson();
    }); //Get the data from the JSON once

    return unsubscribe;
  }, [navigation]);

  const getDataFromJson = async () => {
    for (let index = 0; index < Products.length; index++) {
      if (Products[index].id === ProductId) {
        setproduct(Products[index]);
        return;
      }
    }
  }; //Search for an specific ID then update the product states

  const [count, setcount] = useState(1); //Product Counter

  const BuyAlert = ({ count }) => {
    Alert.alert("Succes", "Go to Cart and Check");
    setcount((count = 1));
  }; //Buy Alert and Count Reset

  const RenderProduct = () => {
    const [price, setprice] = useState(product?.price * count); //Product Price

    return (
      <View>
        <View style={styles.ImageContiner}>
          <Image
            source={product.Image}
            style={{ width: 300, height: 300, resizeMode: "contain" }}
          />
        </View>
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
        <TouchableOpacity style={styles.BuyButton} onPress={BuyAlert}>
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
