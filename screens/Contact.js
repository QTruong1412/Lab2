import { useState } from "react"
import { useEffect } from 'react';
import React from "react";
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native'
import { fetchContacts } from "../utility/api";
import ContactListItem from '../components/ContactListItem'
const keyExtractor = ({ phone }) => phone;
const Contact = ({ navigation }) => {
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
    const dataSorted = contacts.sort((a, b) => a.name.localeCompare(b.name))
    const renderItem = ({ item }) => {
        const { name, avatar, phone } = item;
        return <ContactListItem 
                    name={name} 
                    avatar={avatar} 
                    phone={phone} 
                    onPress={() => navigation.navigate('Profile', { contact: item })}
        />;
    };
    return (
        <View style={style.container}>
            {(loading) && <ActivityIndicator color={'blue'} size={40} />}
            {(error) && <Text>Error Loading...</Text>}
            {!loading && !error && (
                <FlatList
                    data={dataSorted}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                />)}
        </View>
    )
}
const style = StyleSheet.create(
    {
        container: {
            backgroundColor: "white",
            justifyContent: "center",
            flex: 1
        }
    }
);
export default Contact;