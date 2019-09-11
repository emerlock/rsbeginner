// import all needs
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// actual component
// NOTE THE DESTRUCTURING
const ImageDetail = ({ imageSource, title, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Score is {score}</Text>
    </View>
  );
};

// Styles!
const styles = StyleSheet.create({});

// export to make it public
export default ImageDetail;
