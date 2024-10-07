import React from "react";
import { Tabs } from "expo-router";
import { HeartIcon } from "react-native-heroicons/outline";
import { SunIcon } from "react-native-heroicons/outline";
import { CalendarDaysIcon } from "react-native-heroicons/outline";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Today",
          headerTitle: "Home",
          tabBarIcon: ({ color }) => <SunIcon size={24} color={"black"} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="forecasts"
        options={{
          tabBarLabel: "Forecasts",
          headerTitle: "Forecasts",
          tabBarIcon: ({ color }) => (
            <CalendarDaysIcon size={24} color={"black"} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: "Favorites",
          headerTitle: "Favorites",
          tabBarIcon: ({ color }) => <HeartIcon color={"black"} size={24} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
