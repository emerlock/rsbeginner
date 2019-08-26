import React, { useReducer } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ColorCounter from "../Components/ColorCounter";

//state gets created in the most parent component
//even though the state will be used in colorcounter and squarescreen
//squarescreen creates the state

//state can be passed as a prop if the child component needs to read it
//state in child component can be changed isuing an onChange callback
//function as a prop

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state === {red: number, green: number, blue: number}
  //action === {colorToChange: 'red' || 'green' || 'blue, amount: 15 || -15}

  switch (action.colorToChange) {
    case "red":
      //create new object
      //copies the state into this object
      //overwrite red with new value
      //return it
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
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
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
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
