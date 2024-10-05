import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text, TextInput } from "react-native";
import FavoritesView from "../../components/FavoritesView";

import globalStyles from "../../styles/global";
import useAsyncStorage from "../../hooks/useAsyncStorage";

export default function favorites() {
  const { addItem, items } = useAsyncStorage("favorites", []);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    addItem(inputValue);
  }

  return (
    <LinearGradient
      style={globalStyles.gradient}
      colors={["#E4E5E6", "#00416A"]}
    >
      <SafeAreaView style={globalStyles.pageContainer}>
        <Text>Favoriter</Text>
        <TextInput onChangeText={setInputValue} placeholder="Hello" />
        <Pressable onPress={handleAdd}>
          <Text>Lägg till</Text>
        </Pressable>

        <FavoritesView cities={items} />

        {items.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </SafeAreaView>
    </LinearGradient>
  );
}
