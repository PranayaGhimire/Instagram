/* eslint-disable react/no-unescaped-entities */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Auth = () => {
  const [name, setName] = useState("asad_khansov");
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => router.push("/")}>
        <Image source={require("@/assets/images/arrow.png")}/>
      </TouchableOpacity>
      <View style={styles.body}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Instagram</Text>
        <View style={{ width: 343, height: 262, gap: 15 }}>
          <TextInput
            value={name}
            onChangeText={(e) => setName(e)}
            style={{
              backgroundColor: "#FAFAFA",
              borderWidth: 0.5,
              borderColor: "gray",
              borderRadius: 5,
              paddingLeft: 10,
            }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{
              backgroundColor: "#FAFAFA",
              borderWidth: 0.5,
              borderColor: "gray",
              borderRadius: 5,
              paddingLeft: 10,
            }}
          />
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text style={{ color: "#3797EF" }}>Forgot password?</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/(main)")}
            style={{
              backgroundColor: "#3797EF",
              width: 343,
              height: 44,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              marginTop:20
            }}
          >
            <Text style={{ color: "white" }}>Log in</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              paddingTop:20
            }}
          >
            <Image source={require("@/assets/images/facebook.png")} />
            <Text style={{ color: "#3797EF", fontWeight: "500" }}>
              Log in with Facebook
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 343,
            flexDirection: "row",
            alignItems: "center",
            gap: 31,
          }}
        >
          <View style={{ width: 132, height: 0.5, backgroundColor: "gray" }} />
          <Text style={{ color: "gray", fontWeight: "500" }}>OR</Text>
          <View style={{ width: 132, height: 0.5, backgroundColor: "gray" }} />
        </View>
        <Text style={{color:"gray",fontSize:14}}>Don't have an account? <Text style={{color:"#3797EF"}}>Sign up.</Text></Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ color: "gray" }}>Instagram or Facebook</Text>
        <View style={{ backgroundColor: "black", width: 134, height: 5 }} />
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    
  },
  header: {
    padding:20
  },
  body: {
    alignItems: "center",
    gap: 40,
  },
  footer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    borderTopWidth: 0.5,
    borderColor: "gray",
    width: 375,
    height: 79,
  },
});
