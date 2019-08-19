//import libraries
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

//create component - a function that returns "jsx"

/// () => and function() are the same
const ComponentsScreen = () => {
    
    //cannot be a javascript object
    //can be strings, numbers, arrays
    //can also be jsx
    const greeting = <Text>Hello to you!</Text>;
    const nameString = 'Eric';

    //<View> can be either on the same line as return, or in parentheses
    //cannot be under return if not in parentheses
    return (
        <View>
            <Text style={styles.textStyle}>
                Getting started with react native!
            </Text>
            <Text style={styles.nameStyle}>
                My name is {nameString}
            </Text>
            {greeting}
        </View>
    );
};

//create a stylesheet to style component
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

//export the component so we can use it elsewhere
export default ComponentsScreen;