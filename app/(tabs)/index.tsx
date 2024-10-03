import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { WeatherContext } from "../../WeatherProvider";

import SearchBar from "../../components/SearchBar";
import WeatherView from "../../components/WeatherView";
import ForecastsView from "../../components/ForecastsView";

import { Forecast } from "../../types/types";

export default function Home() {
  const { weatherData, fetchWeatherDataByCity } = useContext(WeatherContext);

  function getTodaysForecasts(forecasts: Forecast[]) {
    return forecasts.filter((forecast) => {
      const today = new Date();
      return forecast.time.toLocaleDateString() === today.toLocaleDateString();
    });
  }

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
        {weatherData?.forecasts && (
          <ForecastsView
            forecasts={getTodaysForecasts(weatherData.forecasts)}
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
