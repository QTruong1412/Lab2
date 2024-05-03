
import "react-native-get-random-values";
import {v4} from "uuid"
import { useEffect,useState } from 'react';
import {fetchContacts} from "./utility/api"
import Contacts from './screens/Contacts';
import Profile from './screens/Profile'
import Favorites from "./screens/Favorites";
import React from "react";
import User from "./screens/User";
import Options from "./screens/Options";
import BottomNavigation from "./screens/BottomNavigation";
const App=()=>{
  
  useEffect(()=>{
    fetchContacts().then(data=>console.log(data))
  },[])
  return(
    <BottomNavigation/>
  )
}
export default App;
