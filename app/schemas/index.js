/**
 * @flow
 */
import Realm from "realm";

const CarSchema = {
  name: "Car",
  properties: {
    make: "string",
    model: "string",
    miles: {
      type: "int",
      default: 0
    }
  }
};

const PersonSchema = {
  name: "Person",
  properties: {
    name: "string",
    birthday: "date",
    cars: {
      type: "list",
      objectType: "Car"
    },
    picture: {
      type: "data", // optinal property
      optional: true
    }
  }
};

let realm = new Realm({ schema: [CarSchema, PersonSchema] });
