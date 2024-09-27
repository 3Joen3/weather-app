import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { API_KEY } from "@env";
import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "./useLocation";

export default function App() {
  const location = useLocation();
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${API_KEY}`;

  return (
    <View style={styles.container}>
      {location ? <Text>alt{location.coords.altitude}</Text>: <Text>Hämtar location</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
