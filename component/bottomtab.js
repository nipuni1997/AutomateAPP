import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Customerhome from './components/customerhome';
import MyCart from './components/mycart';
import CustAddAd from './components/custad';

import { useNavigation } from '@react-navigation/core';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#42207A',}}>
      <Tab.Screen name="Home" component={Customerhome} options={{tabBarLabel: 'Home',tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />)}}/>
      <Tab.Screen name="MyCart" component={MyCart} options={{tabBarLabel: 'Cart',tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />) }}/> 
      <Tab.Screen name="AddAd" component={CustAddAd} options={{tabBarLabel: 'Add',tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />)}}/>
    </Tab.Navigator>
  );
}

export default function BottomTab() {
  return (
    <NavigationContainer>
     
      <MyTabs />
    </NavigationContainer>
  );
}
