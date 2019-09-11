import React, { useReducer } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ColorCounter from "../Components/ColorCounter";

// state gets created in the most parent component
// even though the state will be used in colorcounter and squarescreen
// squarescreen creates the state

// state can be passed as a prop if the child component needs to read it
// state in child component can be changed isuing an onChange callback
// function as a prop

const COLOR_INCREMENT = 15;

// using keywords "type" and "payload" are an industry standard***
const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === {colorToChange: 'red' || 'green' || 'blue, amount: 15 || -15}

  switch (action.type) {
    case "change_red":
      // create new object
      // copies the state into this object
      // overwrite red with new value
      // return it
      // if the amount is not within constraints
      // return just the state object
      // some sort of state needs to return at all times in reducers
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
