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
  const [FullName, setFullName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Location, setLocation] = useState(null);
  const [Order, setOrder] = useState(null);
  const [CardNumber, setCardNumber] = useState(null);
  const [SecurityCode, setSecurityCode] = useState(null);

  const ButtonAlert = () => {
    if ((FullName, Email, Location, Order, CardNumber, SecurityCode === null)) {
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
            <Text style={{ fontSize: 18 }}>Full Name:</Text>
            <TextInput
              placeholder="Example: Jaime Parker"
              style={styles.Input}
              onChangeText={setFullName}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>Email:</Text>
            <TextInput
              placeholder="Example: Jaime@gmail.com"
              style={styles.Input}
              onChangeText={setEmail}
              keyboardType="email-address"
/>
          </View>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>Location:</Text>
            <TextInput
              placeholder="Example: California, USA"
              style={styles.Input}
              onChangeText={setLocation}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>Card Number:</Text>
            <TextInput
              placeholder="Example: 2996.6294.9596.9892"
              style={styles.Input}
              onChangeText={setCardNumber}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>Security Code:</Text>
            <TextInput
              placeholder="Example: 123"
              style={styles.Input}
              onChangeText={setSecurityCode}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={{ fontSize: 18 }}>Order Delivery:</Text>
            <TextInput
              placeholder="Example: 215, Street Avenue"
              style={styles.Input}
              onChangeText={setOrder}
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
    width: "60%",
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
