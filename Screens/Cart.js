import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Products } from "../src/Product"; //Products JSON
import { EvilIcons } from "@expo/vector-icons"; //Expo Icons
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlashList } from "@shopify/flash-list"; // Flashlist Component

export default function CartScreen({ navigation }) {
  const [product, setproduct] = useState(); //Product State

  const [total, settotal] = useState(null); // Total Price State

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromJson();
    });

    return unsubscribe;
  }, [navigation]); //Get the data from the JSON once

  const getDataFromJson = async () => {
    let Items = await AsyncStorage.getItem("cartItem");
    Items = JSON.parse(Items);
    let ProductData = [];
    if (Items) {
      Products.forEach((data) => {
        if (Items.includes(data.id)) {
          ProductData.push(data);
          return;
        }
      });
      setproduct(ProductData);
    } else {
      setproduct(false);
    }
  }; // Ger the data stoterd whith Async Storage

  const CartAlert = () => {
    Alert.alert("Check", "Payment was Successful");
  }; // Pay Button Alert

  const CartProduct = (data, index) => {
    return (
      <View style={styles.ProductsContainer}>
        <Image
          source={data.Image}
          style={{
            width: 60,
            height: 60,
            resizeMode: "contain",
            marginRight: 10,
          }}
        />
        <View style={styles.ProductContent}>
          <Text numberOfLines={2} style={{ fontSize: 16, marginBottom: 5 }}>
            {data.name}
          </Text>
          <Text style={{ fontSize: 15, marginBottom: 5 }}>${data.price}</Text>
          <TouchableOpacity>
            <EvilIcons name="trash" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }; // Cart Product Container

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.TopBar}>

      </View>
      <Text>
        {product
          ? product.map((data, index) => {
              return <Text>{data.name} </Text>;
            })
          : null}
      </Text>
      <View style={styles.BuyBottonContainer}>
        <TouchableOpacity style={styles.BuyBotton} onPress={CartAlert}>
          <Text style={styles.BottonText}>Finish Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#12121212",
  },
  ProductsContainer: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  ProductContent: {
    flexDirection: "column",
  },
  BuyBottonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  BuyBotton: {
    alignItems: "center",
    width: "70%",
    backgroundColor: "#121212",
    padding: 10,
    borderRadius: 50,
  },
  BottonText: {
    color: "#fff",
    fontSize: 17,
  },
});
