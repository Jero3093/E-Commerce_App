import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Products } from "../src/Product"; //Products JSON
import { EvilIcons } from "@expo/vector-icons";//Expo Icons

export default function CartScreen({ navigation }) {
  const CartAlert = () => {
    Alert.alert("Check", "Payment was Successful");
  };

  const CartProduct = ({ Products }) => {
    return (
      <View style={styles.ProductsContainer}>
        <Image
          source={Products.Image}
          style={{
            width: 60,
            height: 60,
            resizeMode: "contain",
            marginRight: 10,
          }}
        />
        <View style={styles.ProductContent}>
          <Text numberOfLines={2} style={{ fontSize: 16, marginBottom: 5 }}>
            {Products?.name}
          </Text>
          <Text style={{ fontSize: 15, marginBottom: 5 }}>
            ${Products?.price}
          </Text>
          <TouchableOpacity>
            <EvilIcons name="trash" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.CartContainer}>
      <FlatList
        data={Products}
        renderItem={({ item }) => <CartProduct Products={item} />}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.BuyBottonContainer}>
        <TouchableOpacity style={styles.BuyBotton} onPress={CartAlert}>
          <Text style={styles.BottonText}>Finish Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  CartContainer: {
    flex: 1,
    backgroundColor: "#12121212",
  },
  ProductsContainer: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  ProductContent: {
    flexDirection: "column",
  },
  BuyBottonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  BuyBotton: {
    alignItems: "center",
    width: "70%",
    backgroundColor: "#121212",
    padding: 10,
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
  },
  BottonText: {
    color: "#fff",
    fontSize: 17,
  },
});
