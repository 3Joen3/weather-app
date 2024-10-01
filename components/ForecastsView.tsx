import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Forecast } from "../types";

interface Props {
  forecasts: Forecast[];
}

export default function ForecastsView({ forecasts }: Props) {
  return (
    <ScrollView style={styles.container}>
      {forecasts.length > 0 ? (
        forecasts.map((item, index) => (
          <Text key={index}>{item.degreesCelsius}</Text>
        ))
      ) : (
        <Text>Inga prognoser tillgängliga</Text> // Fallback om data saknas
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%", // Se till att ScrollView tar upp hela bredden
  },
});
