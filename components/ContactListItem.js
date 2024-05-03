import React from "react";
import {  Pressable,View } from "react-native";
import { Avatar, Divider,Text } from "react-native-paper";

const ContactListItem=({
    name,avatar,phone,onPress,
})=>{
    return (
        <Pressable  onPress={onPress}>
            <View style={{flexDirection:'row',padding:10}}>
                <Avatar.Image 
                source={{uri:avatar}} size={40}/>
                <View style={{paddingLeft:10}}>
                    <Text>{name}</Text>
                    <Text>{phone}</Text>
                </View>
            </View>
            <Divider/>
        </Pressable>
    )
}
export default ContactListItem;
