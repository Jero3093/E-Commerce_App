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
              source={Products}
              style={{
                width: 300,
                height: 220,
                resizeMode: "contain",
                marginBottom: 30,
              }}
            />
          </View>
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
      <View style={styles.TopBar}>
        <Text style={styles.TopText}>New Collection</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={styles.CartButton}
        >
          <AntDesign name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <FlatList
        data={Products}
        keyExtractor={Products.id}
        renderItem={({ item }) => <ListProducts Products={item} />}
        showsVerticalScrollIndicator={false}
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
  CardName: {
    fontSize: 20,
    marginBottom: 10,
  },
  CardPrice: {
    fontSize: 18,
    marginBottom: 10,
  },
}); //StyleSheet
