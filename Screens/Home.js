import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list"; //Flash List Component
import { useSelector } from "react-redux"; //Redux Selector Component
import { CategoriesCard } from "../src/Components/Home/CategoriesCard"; //Categories Card Component
import { ProductsCard } from "../src/Components/Home/ProductsCard"; //Products Card Component
import { Header } from "../src/Components/Home/Header"; //Header Component
import { NumberofItems } from "../src/Store/CartSlice";

export default function HomeScreen({ navigation }) {
  const Products = useSelector((state) => state.products.products); //Get all the elements of the Products state of the Store
  const Categories = useSelector((state) => state.products.categories); //Get all the elements of the Categories state of the Store
  const CartItems = useSelector(NumberofItems); //Get the number of the items that are in the Cart

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header NumberItems={CartItems} />
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
        renderItem={({ item }) => <ProductsCard Data={item} />}
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
}); //StyleSheet
