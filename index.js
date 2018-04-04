import React from "react";
import { AppRegistry } from "react-native";
import Header from "./src/components/Header";

const App = () => {
  return <Header headerText={"Albums"} />;
};

AppRegistry.registerComponent("albums", () => App);
