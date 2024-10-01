import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Forecast } from "../types";
import WeatherCard from "./WeatherCard";

interface Props {
  forecasts: Forecast[];
}

export default function ForecastsView({ forecasts }: Props) {
  return (
    <ScrollView style={styles.container}>
      {forecasts.length > 0 ? (
        forecasts.map((item, index) => (
          <WeatherCard
            key={index}
            icon={item.iconUrl}
            date={item.time}
            degrees={item.degreesCelsius}
          />
        ))
      ) : (
        <Text>Inga prognoser tillgängliga</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%", // Se till att ScrollView tar upp hela bredden
  },
});
