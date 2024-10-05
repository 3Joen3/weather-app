import React, { useEffect } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useWeather } from "../hooks/useWeather";
import ForecastCard from "./ForecastCard";

interface Props {
  city: string;
  onError: (errorMessage: string, city: string) => void;
}

export default function FavoriteCard({ city, onError }: Props) {
  const { fetchWeatherDataByCity, weatherData, errorMessage } = useWeather(
    null,
    null
  );

  useEffect(() => {
    fetchWeatherDataByCity(city, true);

    if (errorMessage) {
      onError(errorMessage, city);
    }
  }, [errorMessage]);

  if (errorMessage) {
    return null;
  }

  return (
    <View>
      {weatherData && <Text>{weatherData.city}</Text>}

      {weatherData && (
        <ForecastCard
          id={weatherData.forecasts[0].id}
          icon={weatherData.forecasts[0].iconUrl}
          date={weatherData.forecasts[0].time}
          degrees={weatherData.forecasts[0].degreesCelsius}
          showDay={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    height: 60,
    width: 60,
  },
  temp: {
    fontWeight: "bold",
  },
});
