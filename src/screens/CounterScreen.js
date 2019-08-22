import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {

    //using useState to intialize a new piece of state
    //you pass in the starting, or default value of the data
    //using square brackets to do array destructuring
    //so basically with the destructuring
    //useState returns an array that you can destructure
    //what we are doing is saying the first element returned
    //from useState should be stored in a "counter" variable
    //and the second element returned from useState should
    //be stored in a "setCounter" variable
    const [counter, setCounter] = useState(0);
    
    return <View>
        <Button title="Increase" onPress={() =>{
            counter++;
        }} />
        <Button title="Decrease" onPress={() =>{
            counter--;
        }} />
        <Text>Current count: {counter}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;