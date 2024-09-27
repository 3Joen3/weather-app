import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useLocation } from "./hooks/useLocation";
import { useWeather } from "./hooks/useWeather";

export default function App() {
  const location = useLocation();
  const weatherData = useWeather(
    location?.coords.latitude ?? null,
    location?.coords.longitude ?? null
  );

  function kelvinToCelcius(kelvin: number) {
    return kelvin - 273.15;
  }

  return (
    <View style={styles.container}>
      {weatherData ? <Text>{weatherData.city.name}</Text> : <Text>L</Text>}
      {weatherData ? (
        <Text>{kelvinToCelcius(weatherData.list[0].main.temp)}</Text>
      ) : (
        <Text>L</Text>
      )}

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
