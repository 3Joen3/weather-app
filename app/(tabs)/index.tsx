import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Home() {
  return (
    <LinearGradient
      colors={["#24C6DC", "#514A9D"]}
      style={StyleSheet.absoluteFill}
    >
      <View style={styles.container}>
        <Text>Home</Text>
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
