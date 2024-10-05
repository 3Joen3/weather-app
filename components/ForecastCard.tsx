import { useRouter } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

interface Props {
  id: string;
  icon: string;
  date: Date;
  degrees: number;
  showDay: boolean;
}

export default function ForecastCard({
  icon,
  date,
  degrees,
  showDay,
  id,
}: Props) {
  const router = useRouter();
  function handlePress(id: string) {
    router.push(`/forecasts/${id}`);
  }

  let displayDate = showDay
    ? date.toLocaleDateString("sv-SE", { weekday: "long" })
    : date.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });

  if (showDay && date.getDate() === new Date().getDate()) {
    displayDate = "Idag";
  }

  return (
    <Pressable onPress={() => showDay && handlePress(id)}>
      <View style={styles.container}>
        <Text>{displayDate}</Text>
        <Image style={styles.icon} source={{ uri: icon }} />
        <Text style={styles.temp}>{degrees}°</Text>
      </View>
    </Pressable>
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
