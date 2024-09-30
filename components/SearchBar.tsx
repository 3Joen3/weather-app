import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  placeholder: string;
  onSubmit: (searchTerm: string) => Promise<void>;
}

export default function SearchBar({ placeholder, onSubmit }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!inputValue) {
      setError("Du måste ange en stad.");
      return;
    }
    setError("");
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
          <FontAwesome name="search" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  barContainer: {
    borderWidth: 1,
    borderRadius: 14,
    flexDirection: "row",
    height: 50,
    borderColor: "black",
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
  errorMessage:{
    color: "red",
    marginTop: 5
  }
});
