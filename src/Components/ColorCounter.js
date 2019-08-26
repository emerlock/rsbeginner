import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

//pass reference of the function that is manipulating the scope objects
//so we can do what we want in squarescreen
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
