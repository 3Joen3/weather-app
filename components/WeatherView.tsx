import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
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
        <Text style={[styles.shadowText, styles.heading]}>{city}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  shadowText: {
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
    color: "white",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
