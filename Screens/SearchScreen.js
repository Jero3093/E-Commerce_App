import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; //Navigation
import { Ionicons } from "@expo/vector-icons"; //Expo Icons
import { SearchList } from "../src/Components/SearchScreen/SearchList"; //Search List Component
import { useSelector } from "react-redux"; //Redux Selector Component

export default function SearchScreen() {
  const navigation = useNavigation(); //Navigation Prop

  const Products = useSelector((state) => state.products.products); //Get all the elements of the Products state of the Store

  const [SearchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={styles.Container}>
      {/* Header */}
      <View style={styles.Header}>
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={32} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.Input}
          value={SearchText}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Example: Fifa 21"
          placeholderTextColor={"grey"}
          keyboardAppearance={"dark"}
        />
      </View>
      {/* Search Products List */}
      <SearchList TextValue={SearchText} Data={Products} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#CDCDCD",
  },
  Header: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    paddingBottom: 15,
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#121212",
  },
  Input: {
    width: "80%",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 50,
    padding: 10,
  },
});
