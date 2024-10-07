import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { WeatherContext } from "../../context/WeatherProvider";
import WeatherView from "../../components/WeatherView";
import ForecastsView from "../../components/ForecastsView";
import { Forecast } from "../../types/types";
import globalStyles from "../../styles/global";
import InputBar from "../../components/InputBar";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function Home() {
  const { weatherData, fetchWeatherDataByCity, errorCode } =
    useContext(WeatherContext);

  function getTodaysForecasts(forecasts: Forecast[]) {
    return forecasts.filter((forecast) => {
      const today = new Date();
      return forecast.time.toLocaleDateString() === today.toLocaleDateString();
    });
  }

  return (
    <LinearGradient
      colors={["#E4E5E6", "#00416A"]}
      style={globalStyles.gradient}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={globalStyles.pageContainer}>
          <InputBar
            errorMessage={errorCode === 404 ? "Stad hittas ej." : undefined}
            placeholder="Sök Stad"
            onSubmit={fetchWeatherDataByCity}
          />
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
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}
