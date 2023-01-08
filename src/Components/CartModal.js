import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";

export default function CartModal({ navigation }) {
  const [Data, setData] = useState(null);

  const ButtonAlert = () => {
    if (Data === null) {
      Alert.alert("Error", "There's no Products in Cart");
    } else {
      Alert.alert("Success", "Products will be Delybered soon");
      navigation.replace("Home");
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={{ fontSize: 20, marginVertical: 30, alignSelf: "center" }}>
          Please fill this form to finish de payment
        </Text>
        <View style={styles.FormContainer}>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>First Name:</Text>
            <TextInput
              placeholder="Example: Jaime"
              style={styles.Input}
              onChangeText={setData}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>Last Name:</Text>
            <TextInput
              placeholder="Example: Jaime"
              style={styles.Input}
              onChangeText={setData}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>Email:</Text>
            <TextInput
              placeholder="Example: Jaime"
              style={styles.Input}
              onChangeText={setData}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>Phone Number:</Text>
            <TextInput
              placeholder="Example: Jaime"
              style={styles.Input}
              onChangeText={setData}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>Location:</Text>
            <TextInput
              placeholder="Example: Jaime"
              style={styles.Input}
              onChangeText={setData}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>Order Delivery:</Text>
            <TextInput
              placeholder="Example: Jaime"
              style={styles.Input}
              onChangeText={setData}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
        <TouchableOpacity style={styles.FormButton} onPress={ButtonAlert}>
          <Text style={{ fontSize: 17, color: "#fff", alignSelf: "center" }}>
            Finish
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  FormContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 13,
  },
  Input: {
    backgroundColor: "#12121212",
    color: "black",
    padding: 10,
    paddingHorizontal: 30,
    marginLeft: 10,
    borderRadius: 30,
  },
  FormButton: {
    alignSelf: "center",
    backgroundColor: "#121212",
    padding: 13,
    width: 150,
    borderRadius: 30,
    marginTop: "auto",
    marginBottom: 20,
  },
});
