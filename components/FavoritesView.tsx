import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import FavoriteCard from "./FavoriteCard";

interface Props {
  cities: string[];
}

export default function FavoritesView({ cities }: Props) {
  return (
    <ScrollView style={styles.container}>
      {cities.map((city, index) => (
        <FavoriteCard key={index} city={city} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
});
