/**
 * @flow
 */
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Realm from "realm";

export default class RealmDashboard extends Component {
  realm: Realm;
  constructor(props) {
    super(props);
    this.realm = new Realm({
      schema: [
        {
          name: "Dogger",
          properties: {
            name: "string",
            age: "int"
          }
        }
      ]
    });
    this.stepper = 0;
    this.timer;
    this.state = {
      dogs: []
    };
  }
  componentDidMount() {
    // this.timer = setInterval(this.createNewObject, 1000);
    this.setState({
      dogs: this.realm.objects("Dogger").filtered("age > 1").slice(0, 5)
    });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  createNewObject = () => {
    this.realm.write(() => {
      let newDog = this.realm.create("Dogger", { name: "Ray", age: 3 });
      console.log("new dog is save into realm", newDog);
    });
  };
  logRealmDos = () => {
    // this.realm.
  };
  render() {
    return (
      <View>
        <Text>
          Count of Dogs in Realm: {this.state.dogs.length}
        </Text>
        {this.state.dogs.map((dog, index) =>
          <Text key={`${dog.name}_${index}`}>
            {dog.name}
          </Text>
        )}
      </View>
    );
  }
}
