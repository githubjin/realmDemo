/**
 * @flow
 */
import React, { Component } from "react";
import { View, Text, StyleSheet, PixelRatio, Dimensions } from "react-native";

export default class TransparentDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Transparennt Layer</Text>
        <Text>
          {PixelRatio.get()}
        </Text>
        <Text>{JSON.stringify(Dimensions.get('window'))}</Text>
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
