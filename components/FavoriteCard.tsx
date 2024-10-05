import React, { useEffect } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useWeather } from "../hooks/useWeather";
import ForecastCard from "./ForecastCard";
import globalStyles from "../styles/global";

interface Props {
  city: string;
  onError: (errorMessage: string, city: string) => void;
  onRemove: (cityName: string) => void;
}

export default function FavoriteCard({ city, onError, onRemove }: Props) {
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
    <View style={styles.container}>
      {weatherData && (
        <>
          <View style={styles.topContainer}>
            <Text style={[globalStyles.text, globalStyles.shadowText]}>
              {weatherData.city}
            </Text>
            <Pressable
              onPressIn={() => console.log("HEre")}
              onPress={() => onRemove(weatherData.city)}
            >
              <Text>Ta bort</Text>
            </Pressable>
          </View>
          <ForecastCard
            id={weatherData.forecasts[0].id}
            icon={weatherData.forecasts[0].iconUrl}
            date={weatherData.forecasts[0].time}
            degrees={weatherData.forecasts[0].degreesCelsius}
            showDay={false}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  button: {},
});
