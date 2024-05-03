import {useState,useEffect} from "react";
import { View } from "react-native";
import { fetchRandomContacts } from "../utility/api";
import DetailListItem from "../components/DetailListItem"
import { Avatar,Icon,Text } from "react-native-paper";
const Profile=()=>
{
    const [contact,setContact]=useState({})
    useEffect(() => {
        fetchRandomContacts().then(data => { setContact(data),console.log(data) })
            .catch(e => console.log(e))
    }, [])
    const {name,avatar,phone,email,cell}=contact
    return (
        <View style={{flex:1}}>
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'aqua'
            }}>
                <Avatar.Image source={{uri:avatar}} size={100}/>
                <Text variant="headlineLarge" style={{color:'white'}}>
{contact.name}
                </Text>
                <Text>
                    <Icon source={"phone"}/>
                    {contact.phone}
                </Text>
            </View>
            <View style={{flex:1}}>
                <DetailListItem icon='email' label="Email" value={contact.email}/>
                <DetailListItem icon='phone' label="Work" value={contact.phone}/>
                <DetailListItem icon='cellphone' label="Persona" value={contact.cell}/>

            </View>
        </View>
    )
}
export default Profile;
