import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

interface Props {
  icon: string;
  date: Date;
  degrees: number;
}

export default function WeatherCard({ icon, date, degrees }: Props) {
  const iconUri = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <View style={styles.container}>
      <Text>{date.toLocaleTimeString()}</Text>
      <Image style={styles.icon} source={{ uri: iconUri }} />
      <Text style={styles.temp}>{degrees}°</Text>
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
