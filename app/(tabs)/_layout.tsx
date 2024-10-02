import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Today",
          headerTitle: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="forecasts"
        options={{
          tabBarLabel: "Forecasts",
          headerTitle: "Forecasts",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weather-sunset"
              size={24}
              color="black"
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
