import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useWeather } from "../hooks/useWeather";
import ForecastCard from "./ForecastCard";
import globalStyles from "../styles/global";

interface Props {
  city: string;
  id: string;
  onNotFound: (city: string) => void;
  onRemove: (cityName: string) => void;
}

export default function FavoriteCard({
  id,
  city,
  onNotFound,
  onRemove,
}: Props) {
  const { fetchWeatherDataByCity, weatherData, errorCode } = useWeather(
    null,
    null
  );

  useEffect(() => {
    fetchWeatherDataByCity(city, true);

    if (errorCode === 404) {
      onNotFound(city);
    }
  }, [errorCode]);

  if (errorCode === 404) {
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
            <TouchableOpacity onPress={() => onRemove(id)}>
              <Text>Ta bort</Text>
            </TouchableOpacity>
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
});
