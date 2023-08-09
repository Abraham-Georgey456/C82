import  React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ioniocns from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({route})=>({
                tabBarIcon: ({focused,color,size})=>{
                    let iconName;
                    if(route.name === 'Feed'){
                        iconName = focused ? 'book' : 'book-outline' ;
                    }else if(route.name === 'CreateStory'){
                        iconName = focused ? 'create' : 'create-outline' ;
                    }
                    return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons}/>
                },
            })}
            
                activeTintColor={"#ee8249"}
                inactiveTintColor={"gray"}
           
        >
            <Tab.Screen name = "Feed" component={Feed} options={{headerShown: false }} />
            <Tab.Screen name = "CreateStory" component={CreateStory} options={{headerShown: false}} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    bottomTabStyle:{
        backgroundColor: "#2f345d",
        height:"8%",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        overflow:"hidden",
        position:"absolute"

    },
    icons:{
        width: RFValue(30),
        height:RFValue(30),
    }
});


export default BottomTabNavigator; 