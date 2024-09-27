import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { API_KEY } from "@env";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import React from "react";

export default function App() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${API_KEY}`;

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      setLocation(await Location.getCurrentPositionAsync({}));
    })();
  }, []);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <View style={styles.container}>
      <Text>{url}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
