
import "react-native-get-random-values";
import {v4} from "uuid"
import { useEffect,useState } from 'react';
import {fetchContacts} from "./utility/api"
import Contacts from './screens/Contact';
import React from "react";
const Contact=()=>{
  
}
const App=()=>{
  
  useEffect(()=>{
    fetchContacts().then(data=>console.log(data))
  },[])
  return(
    <Contacts/>
  )
  
}

export default App;
