import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Products } from "../src/Product"; //Products JSON
import { AntDesign } from "@expo/vector-icons"; //Expo Icons

export default function HomeScreen({ navigation }) {
  const ProductsFilter = ({ Products }) => {
    return (
      <View style={styles.FilterContainer}>
        <TouchableOpacity
          style={styles.FilterButton}
          onPress={() =>
            navigation.navigate("Filter", {
              ProductCategory: Products.category,
              ProductId: Products.id,
            })
          }
        >
          <Text style={styles.FilterText}>{Products.category}</Text>
        </TouchableOpacity>
      </View>
    );
  }; //Products Filter Container

  const ListProducts = ({ Products }) => {
    return (
      <View style={styles.CardContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Product Details", { ProductId: Products.id })
          }
        >
          <View style={styles.ImageContainer}>
            <Image
              source={Products.Image}
              style={{
                width: 300,
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
        <Text style={styles.TopText}>New Collection</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={styles.CartButton}
        >
          <AntDesign name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={Products}
        keyExtractor={Products.category}
        renderItem={({ item }) => <ProductsFilter Products={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
      <FlatList
        data={Products}
        keyExtractor={Products.id}
        renderItem={({ item }) => <ListProducts Products={item} />}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      />
    </SafeAreaView>
  );
} //App Container

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12121212",
  },
  TopBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
  },
  TopText: {
    fontSize: 22,
    padding: 15,
  },
  CartButton: {
    marginRight: 20,
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
  FilterContainer: {
    marginLeft: 10,
    marginTop: 10,
  },
  FilterButton: {
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
  },
  FilterText: {
    fontSize: 17,
    padding: 10,
    paddingBottom: 15,
  },
}); //StyleSheet
