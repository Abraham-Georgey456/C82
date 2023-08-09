import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class CreateStory extends React.Component{
    render(){
        return( 
            <View>
                <Text> Story Screen </Text>
            </View>
        );
    }
    
}
const styles= StyleSheet.create({
    container: {
        flex: 1 ,
        justifyContent: 'center',
        alignItems: 'center',
    }
});