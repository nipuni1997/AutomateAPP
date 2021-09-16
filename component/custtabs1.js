import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Customerhome from './customerhome';
import MyCart from './mycart';
import CustAddAd from './custad';
import Chat from './chat';
import Myacc from './custmyacc';

const Tab = createMaterialBottomTabNavigator();

const Btabs = ()=> (
    <Tab.Navigator
      initialRouteName="CustomerHome"
      activeColor="#42207A"
      inactiveColor="black"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'transparent' }}
    >
      <Tab.Screen
        name="Home"
        component={Customerhome}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My Cart"
        component={MyCart}
        options={{
          tabBarLabel: 'My Cart',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Ad"
        component={CustAddAd}
        options={{
          tabBarLabel: 'Add Ad',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My account"
        component={Myacc}
        options={{
          tabBarLabel: 'My account',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

);

export default Btabs;
/*export default function App() {
    return (
      <NavigationContainer>
        <Btabs />
      </NavigationContainer>
    );
  }*/