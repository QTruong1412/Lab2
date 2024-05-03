import { useEffect,useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import { ActivityIndicator, Avatar, Text } from "react-native-paper";
import { fetchContacts } from "../utility/api";
const Favorites=()=>{
    const [contacts,setContacts]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)
    useEffect(() => {
        fetchContacts().then(data => { setContacts(data), setLoading(false), setError(false) })
            .catch(e => {
                console.log(e),
                    setLoading(false),
                    setError(true)

            })
    }, [])
    const renderItem = ({ item }) => {
        const {  avatar } = item;
        return (<Pressable onPress={()=>console.log(item)} style={{padding:20}} >
            <Avatar.Image source={{uri:avatar}} size={80}/>
        </Pressable>
        )  
    };
    return (
        <View>
            {(loading) && <ActivityIndicator color={'blue'} size={40} />}
            {(error) && <Text>Error Loading...</Text>}
            {!loading && !error && (
                <FlatList
                    data={contacts}
                    keyExtractor={item=>item.id}
                    numColumns={3}
                    contentContainerStyle={{alignItems:"center"}}
                    renderItem={renderItem}
                />)}
        </View>
    )
} 
export default Favorites;  