import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, ScrollView } from "react-native";
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
        <Text style={[globalStyles.heading, globalStyles.shadowText]}>
          Favoriter
        </Text>
        <InputBar
          placeholder="Lägg till favorit"
          isAdd={true}
          onSubmit={handleAdd}
          errorMessage={errorMessage}
        />

        <ScrollView style={globalStyles.forecastsContainer}>
          {items.map((city, index) => (
            <FavoriteCard onError={handleError} key={index} city={city} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
