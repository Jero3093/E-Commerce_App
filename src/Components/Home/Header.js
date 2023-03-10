import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"; //Expo Icons
import { useNavigation } from "@react-navigation/native"; //Navigation

export const Header = () => {
  const navigation = useNavigation(); //Navigation Prop

  return (
    <View style={styles.Header}>
      <Text style={styles.TopText}>Alter</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.CartButton}
          onPress={() => navigation.navigate("Search")}
        >
          <Feather name="search" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={styles.CartButton}
        >
          <AntDesign name="shoppingcart" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
  },
  TopText: {
    fontSize: 35,
    fontWeight: "600",
    padding: 15,
    letterSpacing: 1,
  },
  CartButton: {
    marginRight: 20,
  },
});
