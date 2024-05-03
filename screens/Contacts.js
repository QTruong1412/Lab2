import { useState } from "react"
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, View} from 'react-native'
import { fetchContacts } from "../utility/api";
import ContactListItem from '../components/ContactListItem'
import { ActivityIndicator ,Text} from "react-native-paper";
const Contacts = ({navigation}) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetchContacts().then(data => { setContacts(data), setLoading(false), setError(false) })
            .catch(e => {
                console.log(e),
                    setLoading(false),
                    setError(true)

            })
    }, [])
    const renderItem = ({ item }) => {
        const { name, avatar, phone } = item;
        return <ContactListItem 
                    name={item.name} 
                    avatar={item.avatar} 
                    phone={item.phone} 
                    onPress={() => navigation.navigate('Profile', { screen: 'Profile' ,contact:{item}})}
        />;
    };
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            {(loading) && <ActivityIndicator color={'red'} size={40} />}
            {(error) && <Text variant="headlineLarge">Error Loading...</Text>}
            <FlatList
                data={contacts}
                keyExtractor={item=>item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Contacts;