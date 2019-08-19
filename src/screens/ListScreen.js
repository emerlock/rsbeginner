//import libraries
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

//build component
const ListScreen = () => {
    //can provide a key property for React to track list
    //has to be a string
    //e.g. {name: 'Friend #1', key: '1' }
    //removing the key to try the other implementation
    const friends =[
        {name: 'Friend #1', age: 20 },
        {name: 'Friend #2', age: 45 },
        {name: 'Friend #3', age: 32 },
        {name: 'Friend #4', age: 27 },
        {name: 'Friend #5', age: 53 },
        {name: 'Friend #6', age: 30 },
        {name: 'Friend #7', age: 18 },
        {name: 'Friend #8', age: 75 },
        {name: 'Friend #9', age: 62 },
    ];


    return (
    <FlatList 
        //makes the list go left to right instead of up to down
        //horizontal

        //can hide scroll bar
        //showsHorizontalScrollIndicator = {false}

        //second way to deal with key in FlatList
        //since our object has a property (name)
        //that fits what a key needs (unique string)
        //we can just use that for the key
        keyExtractor ={(friend) => friend.name}
        data={friends} 
        renderItem={({item}) => {
            //renderItem function is a single item in array
            //typically it will return an element object that looks like this
            //element === { item: { name: 'Friend #1' }, index: 0 }
            //however we only want the item
            //so if we put item in curly braces, we just get that instead
            //of the entire element

            //item === { name: 'Friend #1 }
            //"DESTRUCTURING"

            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
        }
    } 
    />
    );
}

//styles
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});


//export so we can use elsewhere
export default ListScreen;