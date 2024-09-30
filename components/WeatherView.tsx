import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

interface Props{
    city: string,
    degrees: number,
}

export default function WeatherView({city, degrees}:Props) {
  const url = "https://openweathermap.org/img/wn/10d@2x.png";
  return <View style={styles.container}>
    <Text style={styles.text}>{city}</Text>
    <Text style={styles.text}>{degrees}º</Text>
    <Image style={styles.icon} source={{uri: url}}/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 100,
    borderRadius: 14,
    borderWidth: 1,
    
  },
  text:{
    fontWeight: "bold",
    fontSize: 20
  },
  icon: {
    height: "100%",
    aspectRatio: 1
  }
});
