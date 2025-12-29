import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { imagePath } from "@/constants/imagePath";

const MainLayout = () => {
  return (
    <View style={styles.container}>
       <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: { justifyContent: "center", alignItems: "center" },
        tabBarStyle:{
          height:79
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarIcon: () => <Image source={imagePath.home} /> }}
      />
      <Tabs.Screen
        name="search"
        options={{ tabBarIcon: () => <Image source={imagePath.search} /> }}
      />
      <Tabs.Screen
        name="likes"
        options={{ tabBarIcon: () => <Image source={imagePath.like} /> }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => (
            <Image source={imagePath.icon} style={{ width: 23, height: 23 }} />
          ),
        }}
      />
    </Tabs>
    <View style={styles.bottomLine}/>
    </View>
   
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  bottomLine:{
    width:134,
    height:5,
    backgroundColor:"#060606",
    marginVertical:10
  }
});
