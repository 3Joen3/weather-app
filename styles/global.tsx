import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  text: { color: "white", fontFamily: "Poppins" },
  heading: { fontSize: 40, color: "white", fontFamily: "Poppins-Bold" },
  shadowText: {
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
});

export default globalStyles;
