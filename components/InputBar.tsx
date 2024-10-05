import React, { useState, useContext } from "react";
import { WeatherContext } from "../WeatherProvider";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  placeholder: string;
  errorMessage: string;
  onSubmit: (searchTerm: string) => Promise<void>;
  isAdd: boolean;
}

export default function InputBar({
  placeholder,
  onSubmit,
  isAdd = false,
}: Props) {
  const [inputValue, setInputValue] = useState("");
  const { errorMessage } = useContext(WeatherContext);

  async function handleSubmit() {
    await onSubmit(inputValue);
    setInputValue("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={"black"}
          onChangeText={setInputValue}
          onSubmitEditing={handleSubmit}
          value={inputValue}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          {isAdd ? (
            <Ionicons name="add" size={24} color="white" />
          ) : (
            <Ionicons name="search-sharp" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  barContainer: {
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
    backgroundColor: "black",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    height: "100%",
    backgroundColor: "white",
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14,
  },
  errorMessage: {
    color: "red",
    marginTop: 5,
  },
});
