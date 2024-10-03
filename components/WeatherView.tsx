import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import globalStyles from "../styles/global";
import Entypo from "@expo/vector-icons/Entypo";

interface Props {
  city: string;
  degrees: number;
  description: string;
  icon: string;
}

export default function WeatherView({
  city,
  degrees,
  description,
  icon,
}: Props) {
  const iconUri = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Entypo name="location-pin" size={40} color="black" />
        <Text style={[globalStyles.shadowText, globalStyles.heading]}>
          {city}
        </Text>
      </View>
      <View style={styles.weatherContainer}>
        <Image style={styles.icon} source={{ uri: iconUri }} />
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
