import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherProvider";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import ForecastsView from "../../components/ForecastsView";
import { Forecast } from "../../types/types";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../styles/global";

export default function Forecasts() {
  const { weatherData } = useContext(WeatherContext);

  function getMidDayForecast(forecasts: Forecast[]) {
    return forecasts.filter((item) => item.time.getHours() === 14);
  }

  return (
    <LinearGradient
      style={globalStyles.gradient}
      colors={["#E4E5E6", "#00416A"]}
    >
      <SafeAreaView style={globalStyles.pageContainer}>
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
