import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <LinearGradient
      style={styles.top}
      colors={["#1c0e26", "#583073", "#6f3596"]}
      start={[0, 1]}
      end={[1, 0]}
    >
      <Text style={styles.title}>Clothing</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: "black",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 45,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});

export default Header;
