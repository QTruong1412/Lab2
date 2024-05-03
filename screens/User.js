import { View } from "react-native"
import { fetchUserContacts } from "../utility/api"
import { Avatar, Text } from "react-native-paper"
import { useEffect, useState } from "react"

const User=()=>{
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        fetchUserContacts().then(data => { setUser(data), setLoading(false) })
            .catch(e => {
                console.log(e)
            })
    }, [])
    const {name,avatar,phone}=user
    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'aqua'
        }}>
            <Avatar.Image source={{uri:avatar}} size={150}/>
            <Text  style={{color:'white',fontSize:30,fontWeight:'bold'}}>
{user.name}
            </Text>
            <Text style={{fontSize:24,color:'white'}}>
                {user.phone}
            </Text>
        </View>

    )
} 
export default User;  