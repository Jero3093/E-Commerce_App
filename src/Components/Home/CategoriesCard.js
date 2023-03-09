import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; //Navigation
import { useDispatch, useSelector } from "react-redux"; //Redux Dispatch Component
import { ProductSlice } from "../../Store/ProductSlice"; //Product Slice Component

export const CategoriesCard = ({ Data }) => {
  const navigation = useNavigation(); //Navigation Prop

  const dispatch = useDispatch(); //Dispatch Function

  return (
    <View style={styles.FilterContainer}>
      <TouchableOpacity
        style={styles.FilterButton}
        onPress={() => {
          //Update the state of the Selected Category with the Category Name
          dispatch(ProductSlice.actions.setSelectedCategory(Data.name));

          navigation.navigate("Filter");
        }}
      >
        <Text style={styles.FilterText}>{Data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  FilterContainer: {
    marginHorizontal: 5,
    marginTop: 10,
  },
  FilterButton: {
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "grey",
  },
  FilterText: {
    fontSize: 17,
    padding: 10,
  },
});
