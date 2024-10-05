import React from "react";
import { ScrollView, Text } from "react-native";
import { Forecast } from "../types/types";
import ForecastCard from "./ForecastCard";
import globalStyles from "../styles/global";

interface Props {
  forecasts: Forecast[];
  showDay?: boolean;
}

export default function ForecastsView({ forecasts, showDay = false }: Props) {
  return (
    <ScrollView style={globalStyles.forecastsContainer}>
      {forecasts.length > 0 ? (
        forecasts.map((item, index) => (
          <ForecastCard
            key={index}
            id={item.id}
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
