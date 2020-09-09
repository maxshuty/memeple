import React from "react";
import { Image, StyleSheet, SafeAreaView } from "react-native";

function MemeScroller(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../assets/favicon.png")}
        style={styles.image}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default MemeScroller;
