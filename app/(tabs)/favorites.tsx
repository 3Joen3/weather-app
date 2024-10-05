import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native";
import FavoriteCard from "../../components/FavoriteCard";

import globalStyles from "../../styles/global";
import useAsyncStorage from "../../hooks/useAsyncStorage";
import InputBar from "../../components/InputBar";

export default function Favorites() {
  const { addItem, items, removeItemByName } = useAsyncStorage("favorites", []);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleAdd(city: string) {
    await addItem(city);
  }

  async function handleError(errorMessage: string, city: string) {
    setErrorMessage(errorMessage);
    await removeItemByName(city);
  }

  return (
    <LinearGradient
      style={globalStyles.gradient}
      colors={["#E4E5E6", "#00416A"]}
    >
      <SafeAreaView style={globalStyles.pageContainer}>
        <Text>Favoriter</Text>
        <InputBar
          placeholder="Lägg till favorit"
          isAdd={true}
          onSubmit={handleAdd}
          errorMessage={errorMessage}
        />

        <ScrollView style={styles.container}>
          {items.map((city, index) => (
            <FavoriteCard onError={handleError} key={index} city={city} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },

  barContainer: {
    borderRadius: 14,
    flexDirection: "row",
    height: 50,
  },
  button: {
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
    height: "100%",
    paddingHorizontal: 12,
    justifyContent: "center",
    backgroundColor: "black",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    height: "100%",
    backgroundColor: "white",
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14,
  },
  errorMessage: {
    color: "red",
    marginTop: 5,
  },
});
