import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { FlatList } from "react-native-gesture-handler";
import StoryCard from "./temp_stories.json";

SplashScreen.preventAutoHideAsync();

let customFonts={
    "BubblegumSans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
}
let stories = require("./temp_stories.json");
export default class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fontsLoaded: false,
        }
        
    }
    async _loadFontAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded: true});
    }
    componentDidMount(){
        this._loadFontAsync()
    }
    renderItem=()=>{
        return <StoryCard story={story}/>
    }
    keyExtractor=(item,index)=>indexedDB.toString();
    render(){
        return( 
            <View>
               <FlatList
               keyExtractor={this.keyExtractor}
               data={stories}
               renderItem={this.renderItem}/>
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