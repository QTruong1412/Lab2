import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Contacts from './Contacts';
import Favorites from './Favorites';
import User from './User';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
const Tab = createMaterialBottomTabNavigator();
const BottomNavigation = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contact" component={Contacts} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;