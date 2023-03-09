import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"; //Expo Icons
import { FlashList } from "@shopify/flash-list"; //Flash List Component
import { CategoriesCard } from "../src/Components/Home/CategoriesCard"; //Categories Card Component
import { useSelector, useDispatch } from "react-redux"; //Redux Selector Component
import { ProductSlice } from "../src/Store/ProductSlice"; //Product Slice Component

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch(); //Dispatch Function to change the Global State

  const Products = useSelector((state) => state.products.products); //Get all the elements of the Products state of the Store
  const Categories = useSelector((state) => state.products.categories); //Get all the elements of the Categories state of the Store

  const ListProducts = ({ Products }) => {
    return (
      <View style={styles.CardContainer}>
        <TouchableOpacity
          onPress={() => {
            //Update the state of the Selected Product
            dispatch(ProductSlice.actions.setSelectedProduct(Products.id));

            navigation.navigate("Product Details");
          }}
        >
          <View style={styles.ImageContainer}>
            <Image
              source={Products.Image}
              style={{
                width: 150,
                height: 220,
                resizeMode: "contain",
                marginBottom: 30,
              }}
            />
          </View>
          <Text style={styles.CardCategory}>{Products.category} </Text>
          <Text numberOfLines={2} style={styles.CardName}>
            {Products?.name}
          </Text>
          <Text style={styles.CardPrice}>${Products.price}</Text>
        </TouchableOpacity>
      </View>
    );
  }; //Card Container

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.TopBar}>
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
      <View style={{ marginBottom: 20 }}>
        <FlashList
          data={Categories}
          renderItem={({ item }) => <CategoriesCard Data={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          estimatedItemSize={100}
        />
      </View>
      <FlashList
        data={Products}
        renderItem={({ item }) => <ListProducts Products={item} />}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={100}
        numColumns={2}
      />
    </SafeAreaView>
  );
} //App Container

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDCDCD",
  },
  TopBar: {
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
}); //StyleSheet
