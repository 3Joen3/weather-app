import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import globalStyles from "../../styles/global";
import { WeatherContext } from "../../WeatherProvider";
import { Forecast } from "../../types/types";
import ForecastsView from "../../components/ForecastsView";

export default function ForeCastDetails() {
  const { weatherData } = useContext(WeatherContext);
  const { id } = useLocalSearchParams<{ id: string }>();

  const pressedForecast = weatherData.forecasts.find(
    (forecast) => forecast.id === id
  );

  function getForecastsForDay(forecasts: Forecast[]) {
    const pressedForecast = forecasts.find((forecast) => forecast.id === id);

    if (!pressedForecast) {
      return [];
    }
    const currentDate = pressedForecast.time.toISOString().split("T")[0];

    return weatherData.forecasts.filter(
      (item) => item.time.toISOString().split("T")[0] === currentDate
    );
  }

  return (
    <LinearGradient
      style={globalStyles.gradient}
      colors={["#E4E5E6", "#00416A"]}
    >
      <SafeAreaView style={globalStyles.pageContainer}>
        <Text style={[globalStyles.heading, globalStyles.shadowText]}>
          <Text>
            {pressedForecast?.time.toLocaleDateString("sv-SE", {
              weekday: "long",
            })}
          </Text>
        </Text>
        {weatherData && (
          <ForecastsView
            forecasts={getForecastsForDay(weatherData.forecasts)}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}
