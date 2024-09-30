import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  Text
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocation } from "./hooks/useLocation";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherView from "./components/WeatherView";

export default function App() {
  const location = useLocation();
  const { weatherData, fetchWeatherDataByCity } = useWeather(
    location?.coords.latitude ?? null,
    location?.coords.longitude ?? null
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={["#24C6DC", "#514A9D"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <View style={styles.container}>
          <SearchBar placeholder="Sök Stad" onSubmit={fetchWeatherDataByCity} />
          <WeatherView city={weatherData?.city} degrees={weatherData?.forecasts[0].degreesCelsius} icon={weatherData?.forecasts[0].iconUrl} />
          <Pressable onPress={() => console.log(weatherData)}><Text>Logga</Text></Pressable>
        </View>
        <StatusBar style="dark" />
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
  container: {
    width: "90%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
});
