import React, { useEffect } from "react";
import { Stack } from "expo-router";
import WeatherProvider from "../WeatherProvider";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function StackLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <WeatherProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="forecasts/[id]"
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
            headerBackTitle: "Tillbaka",
          }}
        />
      </Stack>
    </WeatherProvider>
  );
}
