import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; //Navigation

export const CategoriesCard = ({ Data }) => {
  const navigation = useNavigation(); //Navigation Prop

  return (
    <View style={styles.FilterContainer}>
      <TouchableOpacity
        style={styles.FilterButton}
        onPress={() =>
          navigation.navigate("Filter", {
            CategoryName: Data.name,
          })
        }
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
