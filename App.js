import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { Products } from "./src/Product"; //Products JSON
import { AntDesign } from "@expo/vector-icons"; //Expo Icons

export default function App() {
  const [count, setcount] = useState(1); //Product Counter

  const ListProducts = ({ Products }) => {
    const [price, setprice] = useState(Products?.price * count); //Product Price
    return (
      <View style={styles.CardContainer}>
        <View style={styles.ImageContainer}>
          <Image
            source={Products}
            style={{
              width: 300,
              height: 220,
              resizeMode: "contain",
              marginBottom: 30,
            }}
          />
        </View>
        <Text numberOfLines={2} style={styles.CardName}>
          {Products?.name}
        </Text>
        <Text style={styles.CardPrice}>${price}</Text>
        <View style={styles.CardButtons}>
          <TouchableOpacity onPress={() => setcount(count + 1)}>
            <AntDesign name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>{count}</Text>
          <TouchableOpacity onPress={() => setcount(count - 1)}>
            <AntDesign name="minuscircleo" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text numberOfLines={3} style={styles.CardDescription}>
          {Products?.description}
        </Text>
        <View style={styles.BuyButtonContainer}>
          <TouchableOpacity style={styles.BuyButton} onPress={BuyAlert}>
            <Text style={styles.BuyButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }; //Card Container

  const BuyAlert = ({ count }) => {
    Alert.alert("Succes", "Go to Cart and Check");
    setcount((count = 1));
  }; //Buy Alert and Count Reset

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.TopText}>New Collection</Text>
      <StatusBar style="auto" />
      <FlatList
        data={Products}
        keyExtractor={Products.id}
        renderItem={({ item }) => <ListProducts Products={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
} //App Container

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12121212",
  },
  TopText: {
    fontSize: 22,
    padding: 15,
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
  CardName: {
    fontSize: 20,
    marginBottom: 10,
  },
  CardPrice: {
    fontSize: 18,
    marginBottom: 10,
  },
  CardButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
    width: 100,
  },
  CardDescription: {
    fontSize: 13,
  },
  BuyButtonContainer: {
    alignItems: "center",
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
}); //StyleSheet
