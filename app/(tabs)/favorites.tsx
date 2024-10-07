import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import FavoriteCard from "../../components/FavoriteCard";

import globalStyles from "../../styles/global";
import useAsyncStorage from "../../hooks/useAsyncStorage";
import InputBar from "../../components/InputBar";

export default function Favorites() {
  const { addItem, items, removeItemById, itemExists } = useAsyncStorage(
    "favorites",
    []
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleAdd(city: string) {
    if (itemExists(city)) {
      setErrorMessage(`${city} är redan en favorit.`);
      return;
    }
    await addItem(city);
    setErrorMessage("");
  }

  async function handleNotFound(city: string) {
    setErrorMessage(`Stad ${city} hittas ej.`);
    await removeItemById(city);
  }

  return (
    <LinearGradient
      style={globalStyles.gradient}
      colors={["#E4E5E6", "#00416A"]}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            {items.map((item, index) => (
              <FavoriteCard
                onRemove={removeItemById}
                onNotFound={handleNotFound}
                key={index}
                city={item.title}
                id={item.id}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}
