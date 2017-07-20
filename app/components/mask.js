/**
 * @flow
 */
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Mask extends Component {
  state = {};
  render() {
    return (
      <View style={styles.overlay} pointerEvents="none">
        <Text>Mask</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "#000",
    position: "absolute",
    opacity: 0.3,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center"
  }
});
