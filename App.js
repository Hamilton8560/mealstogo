import React from "react";
import { StyleSheet } from "react-native";
import RestaurantsScreen from "./src/features/restaurants/components/screens/restaurants.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
