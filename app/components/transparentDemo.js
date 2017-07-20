/**
 * @flow
 */
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TransparentDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Transparennt Layer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  }
});
