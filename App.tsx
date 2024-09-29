import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useLocation } from "./hooks/useLocation";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";

export default function App() {
  const location = useLocation();
  const { weatherData, fetchWeatherDataByCity } = useWeather(
    location?.coords.latitude ?? null,
    location?.coords.longitude ?? null
  );

  function kelvinToCelcius(kelvin: number) {
    return kelvin - 273.15;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SearchBar
          placeholder="Sök Stad"
          iconColor="black"
          buttonBackground="rgba(52, 52, 52, 0.1)"
          borderColor="#ccc"
          placeholderColor="#999"
          onSubmit={fetchWeatherDataByCity}
        />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
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
