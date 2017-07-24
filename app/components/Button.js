/**
 * @flow
 */

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { Component } from "react";
import { normalize } from "../utils";

export default class Button extends Component {
  state = {
    pointEvent: null
  };
  onPress = (name: string) => {
    return () => {
      Alert.alert("提示", `Button ${name} is pressed !`);
    };
  };
  containerPressed = () => {
    Alert.alert("提示", `Container pressed`);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.containerPressed} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Bnt
            title="outer - none"
            pointerEvents="none"
            style={styles.outer}
            onPress={this.onPress("Outter")}
          >
            <Bnt
              title="inner"
              style={styles.inner}
              onPress={this.onPress("Inner")}
            />
          </Bnt>
          <Bnt
            title="outer - auto"
            pointerEvents="auto"
            style={styles.outer}
            onPress={this.onPress("Outter")}
          >
            <Bnt
              title="inner"
              style={styles.inner}
              onPress={this.onPress("Inner")}
            />
          </Bnt>
          <Bnt
            title="outer - box-none"
            pointerEvents="box-none"
            style={styles.outer}
            onPress={this.onPress("Outter")}
          >
            <Bnt
              title="inner"
              style={styles.inner}
              onPress={this.onPress("Inner")}
            />
          </Bnt>
          <Bnt
            title="outer - box-only"
            pointerEvents="box-only"
            style={styles.outer}
            onPress={this.onPress("Outter")}
          >
            <Bnt
              title="inner"
              style={styles.inner}
              onPress={this.onPress("Inner")}
            />
          </Bnt>
        </View>
      </TouchableOpacity>
    );
  }
}

/**
 * auto none box-none box-only
 * @param {*} param0 
 */
const Bnt = ({ children, title, pointerEvents = null, style = {}, onPress }) =>
  <TouchableWithoutFeedback onPress={onPress}>
    <View
      pointerEvents={pointerEvents}
      style={styles.bnt}
      style={[styles.bnt, style]}
    >
      <Text style={styles.title}>
        {title} - {normalize(18).toFixed(2)}
      </Text>
      {children}
    </View>
  </TouchableWithoutFeedback>;

const styles = StyleSheet.create({
  bnt: {
    padding: 10,
    height: 100
  },
  title: {
    color: "#cccccc",
    fontSize: normalize(18)
  },
  outer: {
    backgroundColor: "#707070",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  inner: {
    backgroundColor: "#888",
    justifyContent: "center",
    alignItems: "center"
  }
});
