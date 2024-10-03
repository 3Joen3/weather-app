import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  text: { color: "white", fontFamily: "Poppins" },
  heading: { fontSize: 40, color: "white", fontFamily: "Poppins-Bold" },
  shadowText: {
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    gap: 50,
  },
  gradient: {
    flex: 1,
  },
});

export default globalStyles;
