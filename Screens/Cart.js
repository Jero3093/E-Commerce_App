import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Products } from "../src/Product"; //Products JSON
import { EvilIcons } from "@expo/vector-icons"; //Expo Icons
import AsyncStorage from "@react-native-async-storage/async-storage"; //Async Storage Component
import { Ionicons } from "@expo/vector-icons"; //Expo Icons

export default function CartScreen({ navigation }) {
  const [product, setproduct] = useState(); //Product State

  const [Total, setTotal] = useState(null); // Total Price State

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
      getTotal(ProductData);
    } else {
      setproduct(false);
      getTotal(false);
    }
  }; // Get the data stoterd whith Async Storage

  const getTotal = (ProductData) => {
    let total = 0;
    for (let index = 0; index < ProductData.length; index++) {
      let ProductPrice = ProductData[index].ProductPrice;
      total = total + ProductPrice;
    }

    setTotal(total);
  }; //Get the total price to pay

  const removeProduct = async (id) => {
    let ItemArray = await AsyncStorage.getItem("cartItem");
    ItemArray = JSON.parse(ItemArray);
    if (ItemArray) {
      let array = ItemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }

        await AsyncStorage.setItem("cartItem", JSON.stringify(array));
        getDataFromJson();
      }
    }
  }; //Remove the Products from the Cart

  const CartAlert = () => {
    Alert.alert("Check", "Payment was Successful");
  }; //Pay Button Alert

  const CartProduct = (data, index) => {
    return (
      <View style={styles.ProductsContainer} key={data.id}>
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
          <Text numberOfLines={1} style={{ fontSize: 16, marginBottom: 5 }}>
            {data.name}
          </Text>
          <Text style={{ fontSize: 15, marginBottom: 5 }}>${data.price}</Text>
          <TouchableOpacity onPress={() => removeProduct(data.id)}>
            <EvilIcons name="trash" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }; //Cart Product Container

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.TopBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="md-chevron-back-outline" size={33} color="black" />
        </TouchableOpacity>
        <Text style={styles.TopBarTitle}>Cart</Text>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.TopBarTotal}>Total:</Text>
          <Text style={styles.TopBarTotal}>${Total}</Text>
        </View>
      </View>
      <ScrollView>
        <View>{product ? product.map(CartProduct) : null}</View>
        {/* Function to Render the items from Async Storage */}
      </ScrollView>
      <View style={styles.BuyBottonContainer}>
        <TouchableOpacity style={styles.BuyBotton} onPress={CartAlert}>
          <Text style={styles.BottonText}>Finish Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}//Screen Container

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#12121212",
  },
  TopBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  TopBarTitle: {
    fontSize: 19,
    fontWeight: "600",
  },
  TopBarTotal: {
    fontSize: 18,
  },
  ProductsContainer: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: "hidden",
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
