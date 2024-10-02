import React from "react";
import { Stack } from "expo-router";
import WeatherProvider from "../WeatherProvider";

export default function StackLayout() {
  return (
    <WeatherProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </WeatherProvider>
  );
}
