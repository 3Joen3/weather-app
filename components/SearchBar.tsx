import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  placeholder: string;
  onSubmit: (searchTerm: string) => Promise<void>;
}

export default function SearchBar({
  placeholder,
  onSubmit,
}: Props) {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"black"}
        onChangeText={onChangeText}
        onSubmitEditing={() => onSubmit(text)}
        value={text}
      />
      <TouchableOpacity
        onPress={() => onSubmit(text)}
        style={styles.button}
      >
        <FontAwesome name="search" size={24} color={"white"} />
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
    borderColor: "black",
  },
  button: {
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
    height: "100%",
    paddingHorizontal: 12,
    justifyContent: "center",
    backgroundColor: "black"
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    height: "100%",
    backgroundColor: "white",
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14
  },
});
