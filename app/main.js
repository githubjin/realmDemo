/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Alert
} from "react-native";
import {
  RealmDashboard,
  BrawerLayout,
  Button,
  Mask,
  TransparentLayer
} from "./components";

export default class realmDemo extends Component {
  _renderNavigationView = () => {
    return (
      <View>
        <Text>Navigation View is rendered ! </Text>
      </View>
    );
  };
  onDrawerOpen = () => {
    console.log("提示", "Drawer opened");
  };
  onDrawerClose = () => {
    console.log("提示", "Drawer closed");
  };
  onDrawerStateChanged = () => {
    console.log("提示", "Drawer start changed");
  };
  _render() {
    return (
      <View>
        <Button />
        <BrawerLayout
          drawerPosition="left"
          drawerWidth={Dimensions.get("window").width * 0.6}
          renderNavigationView={this._renderNavigationView}
          onDrawerOpen={this.onDrawerOpen}
          onDrawerClose={this.onDrawerClose}
          onDrawerStateChanged={this.onDrawerStateChanged}
          drawerBackgroundColor="#999999"
        >
          <RealmDashboard />
        </BrawerLayout>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button />
        <TransparentLayer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("realmDemo", () => realmDemo);
