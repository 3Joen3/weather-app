import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
      <LinearGradient
      colors={["#24C6DC", "#514A9D"]}
      start={{x:0, y:0}}
      end={{x:1, y:1}}
      style={styles.background}>
        <View style={styles.container}>
          <SearchBar
            placeholder="Sök Stad"
            onSubmit={fetchWeatherDataByCity}
          />
        </View>
        <StatusBar style="auto" />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container:{
    width: "90%"
  }
});
