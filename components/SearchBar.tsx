import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  placeholder: string;
  placeholderColor: string;
  iconColor: string;
  buttonBackground: string;
  borderColor: string;
}

export default function SearchBar({
  placeholder,
  placeholderColor,
  iconColor,
  buttonBackground,
  borderColor,
}: Props) {
  return (
    <View style={[styles.container, { borderColor: borderColor }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackground }]}
      >
        <FontAwesome name="search" size={24} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 14,
    flexDirection: "row",
    height: 50,
  },
  button: {
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
    height: "100%",
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    height: "100%",
  },
});
