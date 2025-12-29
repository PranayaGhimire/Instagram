import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { stories } from "@/constants/stories";
import { imagePath } from "@/constants/imagePath";

const Main = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center px-8 py-4">
        <Image source={imagePath.camera} width={10} height={10}/>
        <View className="flex flex-row items-center gap-10">
          <Text className="text-3xl font-semibold">Instagram</Text>
          <View className="flex flex-row gap-5 items-center">
            <Image source={imagePath.igtv}/>
            <Image source={imagePath.messenger}/>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          borderColor: "gray",
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={stories}
          renderItem={({ item }) => (
            <View
              style={{ gap: 5, marginHorizontal: 10, alignItems: "center" }}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderWidth: 2,
                  borderColor: "red",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 68, height: 68, borderRadius: 50 }}
                  resizeMode="cover"
                />
              </View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {},
  header: {},
  body: {},
});
