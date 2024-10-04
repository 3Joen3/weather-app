import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

import globalStyles from "../../styles/global";

export default function favorites() {
  return (
    <LinearGradient
      style={globalStyles.gradient}
      colors={["#E4E5E6", "#00416A"]}
    >
      <SafeAreaView style={globalStyles.pageContainer}>
        <Text>Favoriter</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}
