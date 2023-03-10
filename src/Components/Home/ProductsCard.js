import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ProductSlice } from "../../Store/ProductSlice"; //Product Slice Component
import { useDispatch } from "react-redux"; //Redux Dispatch Component
import { useNavigation } from "@react-navigation/native"; //Navigation Component

export const ProductsCard = ({ Data }) => {
  const dispatch = useDispatch(); //Dispatch Function to change the Global State

  const navigation = useNavigation(); //Navigation Prop

  return (
    <TouchableOpacity
      style={styles.CardContainer}
      onPress={() => {
        //Update the state of the Selected Product with the Product ID
        dispatch(ProductSlice.actions.setSelectedProduct(Data.id));

        navigation.navigate("Product Details");
      }}
    >
      <View style={styles.ImageContainer}>
        <Image
          source={Data.Image}
          style={{
            width: 150,
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
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "column",
    padding: 15,
    marginBottom: 25,
    marginHorizontal: 7,
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
