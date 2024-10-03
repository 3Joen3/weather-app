import React, { useContext } from "react";
import { WeatherContext } from "../../WeatherProvider";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import ForecastsView from "../../components/ForecastsView";
import { Forecast } from "../../types/types";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../styles/global";

export default function Forecasts() {
  const { weatherData, fetchWeatherDataByCity } = useContext(WeatherContext);

  function getMidDayForecast(forecasts: Forecast[]) {
    return forecasts.filter((item) => item.time.getHours() === 14);
  }

  return (
    <LinearGradient
      style={StyleSheet.absoluteFill}
      colors={["#E4E5E6", "#00416A"]}
    >
      <SafeAreaView style={styles.container}>
        <Text style={[globalStyles.heading, globalStyles.shadowText]}>
          Prognoser
        </Text>
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
    gap: 2,
  },
});
