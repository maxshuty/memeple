import React from "react";
import { StyleSheet, View } from "react-native";
import MemeScroller from "./MemeScroller";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <MemeScroller />
      <View style={styles.loginButton}></View>
      <View style={styles.reigsterButton}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.lightGrey,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.buttonPrimary,
  },
  reigsterButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.buttonSecondary,
  },
});

export default WelcomeScreen;
