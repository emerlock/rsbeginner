import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// section 57 exercise, convert useState to useReducer
const reducer = (state, action) => {
  switch (action.type) {
    case "change_counter":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // using useState to intialize a new piece of state
  // you pass in the starting, or default value of the data
  // using square brackets to do array destructuring
  // so basically with the destructuring
  // useState returns an array that you can destructure
  // what we are doing is saying the first element returned
  // from useState should be stored in a "counter" variable
  // and the second element returned from useState should
  // be stored in a "setCounter" variable

  // never modify counter directly
  // use the second item in the destructure

  // edit: using reducer instead of useState for reducer exercise
  // const [counter, setCounter] = useState(0);
  // const [message, setMessage] = useState("the");

  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // don't do this
          // counter++;
          // edit: using dispatch instead of setCounter for reducer exercise
          // setCounter(counter + 1);
          dispatch({ type: "change_counter", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // edit: using dispatch instead of setCounter for reducer exercise
          // setCounter(counter - 1);
          dispatch({ type: "change_counter", payload: -1 });
        }}
      />
      <Text>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
