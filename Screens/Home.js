import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Products, Categories } from "../src/Product"; //Products JSON
import { AntDesign } from "@expo/vector-icons"; //Expo Icons
import { FlashList } from "@shopify/flash-list"; //Flash List Component
import { CategoriesCard } from "../src/Components/Home/CategoriesCard"; //Categories Card Component

export default function HomeScreen({ navigation }) {
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={styles.CartButton}
        >
          <AntDesign name="shoppingcart" size={32} color="black" />
        </TouchableOpacity>
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
    backgroundColor: "#12121212",
  },
  TopBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
  },
  TopText: {
    fontSize: 30,
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
