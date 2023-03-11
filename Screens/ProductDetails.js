import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
} from "react-native";
import { FlashList } from "@shopify/flash-list"; //Flash List Component
import { useSelector, useDispatch } from "react-redux"; //Redux Selector Component
import { CartSlice } from "../src/Store/CartSlice"; //CartSlice

export default function ProductDetatil() {
  const product = useSelector((state) => state.products.SelectedProduct); //Function to get selected product from selected products Global State

  const dispatch = useDispatch(); //Dispatch Function

  const { width } = useWindowDimensions(); //Width Dimension of the Device

  const AddToCart = () => {
    dispatch(CartSlice.actions.addToCart({ product })); //Function to send the specific data of the product from the selector to the CartSlice
    Alert.alert("Check", "The product it in the cart");
  };

  const RenderProduct = () => {
    return (
      <View>
        {/* Carrousel of Images */}
        <FlashList
          data={product.ImageCarrousel}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{
                width: width,
                height: 300,
                resizeMode: "contain",
                backgroundColor: "#fff",
              }}
            />
          )}
          pagingEnabled={true}
          estimatedItemSize={50}
        />
        {/* Product Content */}
        <View style={styles.ProductContent}>
          {/* Category */}
          <Text style={styles.CardCategory}>{product.category}</Text>
          {/* Name */}
          <Text style={styles.ProductName}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.ProductPrice}>$ {product.price} </Text>
          {/* Description */}
          <Text style={styles.ProductDescription}>{product.description}</Text>
        </View>
      </View>
    );
  }; //Product to Render

  return (
    <View style={styles.Container}>
      <ScrollView>
        <RenderProduct />
      </ScrollView>
      <View style={{ backgroundColor: "#12121212", paddingBottom: 30 }}>
        <TouchableOpacity style={styles.BuyButton} onPress={AddToCart}>
          <Text style={styles.BuyButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "100%",
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
    marginVertical: 25,
    marginRight: 10,
  },
  ProductDescription: {
    fontSize: 15,
    lineHeight: 30,
  },
  BuyButton: {
    alignSelf: "center",
    backgroundColor: "black",
    width: "70%",
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  BuyButtonText: {
    fontSize: 15,
    color: "#fff",
  },
});
