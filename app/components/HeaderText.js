import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: 700,
  },
});

export default AppText;
