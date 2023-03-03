import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export const FilteredProductCard = ({ Data }) => {
  return (
    <View style={styles.CardContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Product Details", { ProductId: Data.id })
        }
      >
        <View style={styles.ImageContainer}>
          <Image
            source={Data.Image}
            style={{
              width: 300,
              height: 220,
              resizeMode: "contain",
              marginBottom: 30,
            }}
          />
        </View>
        <Text style={styles.CardCategory}>{Data.category} </Text>
        <Text numberOfLines={2} style={styles.CardName}>
          {Data.name}
        </Text>
        <Text style={styles.CardPrice}>${Data.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
