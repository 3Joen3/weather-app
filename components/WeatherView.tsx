import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import globalStyles from "../styles/global";
import { MapPinIcon } from "react-native-heroicons/solid";

interface Props {
  city: string;
  degrees: number;
  description: string;
  icon: string;
}

export default function WeatherView({ city, degrees, icon }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <MapPinIcon size={30} color={"black"} />
        <Text style={[globalStyles.shadowText, globalStyles.heading]}>
          {city}
        </Text>
      </View>
      <View style={styles.weatherContainer}>
        <Image style={styles.icon} source={{ uri: icon }} />
        <Text style={[globalStyles.heading, globalStyles.shadowText]}>
          {degrees}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  /* */
  weatherContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
  },
});
