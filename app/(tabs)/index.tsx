import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../../components/SearchBar";
import { useLocation } from "../../hooks/useLocation";
import { useWeather } from "../../hooks/useWeather";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherView from "../../components/WeatherView";

export default function Home() {
  const location = useLocation();
  const { weatherData, fetchWeatherDataByCity } = useWeather(
    location?.coords.latitude ?? null,
    location?.coords.longitude ?? null
  );
  return (
    <LinearGradient
      colors={["#E4E5E6", "#00416A"]}
      style={StyleSheet.absoluteFill}
    >
      <SafeAreaView style={styles.container}>
        <SearchBar placeholder="Sök Stad" onSubmit={fetchWeatherDataByCity} />
        {weatherData && (
          <WeatherView
            city={weatherData?.city}
            degrees={weatherData?.forecasts[0].degreesCelsius}
            description={weatherData.forecasts[0].description}
            icon={weatherData?.forecasts[0].iconUrl}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 14,
    gap: 50,
  },
});
