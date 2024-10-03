import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Forecast } from "../types/types";
import ForecastCard from "./ForecastCard";

interface Props {
  forecasts: Forecast[];
  showDay?: boolean;
}

export default function ForecastsView({ forecasts, showDay = false }: Props) {
  return (
    <ScrollView style={styles.container}>
      {forecasts.length > 0 ? (
        forecasts.map((item, index) => (
          <ForecastCard
            key={index}
            icon={item.iconUrl}
            date={item.time}
            degrees={item.degreesCelsius}
            showDay={showDay}
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
    width: "100%",
  },
});
