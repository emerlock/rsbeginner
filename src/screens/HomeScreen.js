import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// since the stack navigator is calling the home screen
// it also sends properties (props) we can use
// we need to accept the argument it sends
// so we have the arg "props" so we can utilize the stack nav props

// additionally, we can DESTRUCTURE props to only show the navigation object
// as before, use curly braces and just call that navigation object

// instead of HomeScreen = (props) =>{
// do what is seen below
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={(styles.text, gStyles.text)}>hi there!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const gStyles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default HomeScreen;

// two ways to do buttons
// button primitive gives you a button, but cannot be styled
// touchable opacity primitive wraps a selection of items that you want to
// be a "button", or touchable
// can actually style this or do anything with
// touchable opacity is used more often

/*

<TouchableOpacity onPress={ () => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>

*/
