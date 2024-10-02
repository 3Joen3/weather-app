import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { useWeather } from "../../hooks/useWeather";
import { useLocation } from "../../hooks/useLocation";
import ForecastsView from "../../components/ForecastsView";
import { Forecast } from "../../types";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Forecasts() {
  const location = useLocation();
  const { weatherData } = useWeather(
    location?.coords.latitude ?? null,
    location?.coords.longitude ?? null
  );

  function getMidDayForecast(forecasts: Forecast[]) {
    return forecasts.filter((item) => item.time.getHours() === 14);
  }

  return (
    <LinearGradient
      style={StyleSheet.absoluteFill}
      colors={["#E4E5E6", "#00416A"]}
    >
      <SafeAreaView style={styles.container}>
        {weatherData && (
          <ForecastsView
            forecasts={getMidDayForecast(weatherData.forecasts)}
            showDay={true}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
});
