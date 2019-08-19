//import all needs
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

//actual component
const ImageScreen = () => {
    return <View>
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
    </View>
}


//Styles!
const styles = StyleSheet.create({});

//export to make it public
export default ImageScreen;