import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux"; //Redux Dispatch Component
import { ProductSlice } from "../../Store/ProductSlice"; //Product Slice Component

export const SearchList = ({ Data, TextValue }) => {
  const Dispatch = useDispatch(); //Redux Dispatch Function

  const navigation = useNavigation(); //Navigation Prop

  return (
    <FlatList
      data={Data}
      renderItem={({ item }) => {
        {
          /*If the Input text is a empty String return noting*/
        }
        if (TextValue === "") {
          return;
        }
        {
          /* If the Input text is a correct name of the Product return that Product Card */
        }
        if (item.name.toUpperCase().includes(TextValue.toUpperCase())) {
          return (
            <View style={styles.CardContainer}>
              <TouchableOpacity
                onPress={() => {
                  //Update the state of the Selected Product with the Product ID
                  Dispatch(ProductSlice.actions.setSelectedProduct(item.id));

                  navigation.navigate("Product Details");
                }}
              >
                <View style={styles.ImageContainer}>
                  <Image
                    source={item.Image}
                    style={{
                      width: 150,
                      height: 220,
                      resizeMode: "contain",
                      marginBottom: 30,
                    }}
                  />
                </View>
                <Text style={styles.CardCategory}>{item.category} </Text>
                <Text numberOfLines={2} style={styles.CardName}>
                  {item.name}
                </Text>
                <Text style={styles.CardPrice}>${item.price}</Text>
              </TouchableOpacity>
            </View>
          );
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    width: 400,
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
