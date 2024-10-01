import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Forecasts() {
  return (
    <LinearGradient
      style={StyleSheet.absoluteFill}
      colors={["#24C6DC", "#514A9D"]}
    >
      <View style={styles.container}>
        <Text>Forecasts</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
