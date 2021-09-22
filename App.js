import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,DrawerLayoutAndroid,Button, Text, View, Pressable ,Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import HomeScreen from './component/signup';
import Login from './component/login';
import Landing from './component/landing';
import UserRole from './component/userrole';
import Repair1 from './component/repairstationsignup1';
import Repair2 from './component/repairstationsignuo2';
import Repair3 from './component/repairstationsignup3';
import Repair4 from './component/repairstationsignup4';
import Forgot from './component/forgot';
import Selectdata from './component/Selectdata';
import Postdata from './component/Postdata';
import MyAds from './component/myads';
import Mechanics from './component/mechanicdetails1';
import Contact from './component/contactus';
import About from './component/aboutus';
import Chat from './component/chat';
import Addad from './component/custad';
import MyAcc from './component/myaccount1';
import Direction from './component/chat';
import SearchRepair from './component/searchRepair';
import CustomerLanding from './component/CustomerLanding';
import RepairDetails from './component/RepairDetails';
import RepairHome from './component/repairstationhome';
import MechanicList from './component/mechaniclist';
import Customerhome from './component/customerhome';
import LogOut from './component/logout';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

 function App() {

  return (
    // <Postdata/>

    <NavigationContainer>
     
      <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="UserRole"component={UserRole} options={{headerShown:false}}/>
        <Stack.Screen name="Repair1" component={Repair1} options={{headerShown:false}}/>
        <Stack.Screen name="Repair2" component={Repair2} options={{headerShown:false}}/>
        <Stack.Screen name="Repair3" component={Repair3} options={{headerShown:false}}/>
        <Stack.Screen name="Repair4" component={Repair4} options={{headerShown:false}}/>
        <Stack.Screen name="Forgot" component={Forgot} options={{headerShown:false}}/>
        <Stack.Screen name="CustomerHome" component={Customerhome} options={{headerShown:false}}/>
        <Stack.Screen name="SearchRepair" component={SearchRepair} options={{headerShown:false}}/>
        <Stack.Screen name="RepairDetails" component={RepairDetails} options={{headerShown:false}}/>
        {/* <Stack.Screen name="Mechanic List" component={MechanicList} options={{headerShown:false}}/> */}
        <Stack.Screen name="Add Mechanic" component={Mechanics} options={{headerShown:false}}/>
        <Stack.Screen name="CustomerLanding" component={CustomerStack} options={{headerShown:false}} />
        <Stack.Screen name="RepairHome" component={RepairStack} options={{headerShown:false}}/>

      </Stack.Navigator>
      {/* <MyDrawer/> */}
    
    </NavigationContainer>
  );
}
const CustomerStack = () =>{
  return(
    <Drawer.Navigator initialRouteName="Home"   >
     
    <Drawer.Screen name="Home" component={MyStack1}  />
    <Drawer.Screen name="My Ads" component={MyAds}/>
    {/* <Drawer.Screen name="Search Repair Station" component={SearchRepair} options={{headerShown:false}}/> */}
    <Drawer.Screen name="Contact" component={Contact}  />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Log out" component={LogOut} options={{headerShown:false}}/>
</Drawer.Navigator>
  )
}

const RepairStack = () =>{
  return(
    <Drawer.Navigator initialRouteName="Home"   >
     
    <Drawer.Screen name="Home" component={MyStack}  />
    {/* <Drawer.Screen name="My Ads" component={MyAds} /> */}
    <Drawer.Screen name="Mechanic List" component={MechanicList}/>
    {/* <Drawer.Screen name="Add Mechanics" component={Mechanics} /> */}
    <Drawer.Screen name="Contact" component={Contact}  />
    <Drawer.Screen name="About" component={About} />
</Drawer.Navigator>
  )
}

const MyStack1 = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen
              name="Home"
              
              component={BottomNavCus}
              options={{
                  headerShown: false,
              }}
          />
          <Stack.Screen
              name="My Ads"
              
              component={MyAds}
              options={{
                  headerShown: false,
              }}
          />
          <Stack.Screen
              name="Mechanics"
              
              component={SearchRepair}
              options={{
                  headerShown: false,
              }}
          />
          <Stack.Screen
              name="Contact"
              
              component={Contact}
              options={{
                  headerShown: false,
              }}
          />
          <Stack.Screen
              name="About"
              component={About}
              options={{
                  headerShown: false,
              }}
          />
          
      </Stack.Navigator>
  )
}
const MyStack = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen
              name="Home"
              
              component={BottomNav}
              options={{
                  headerShown: false,
              }}
          />
          <Stack.Screen
              name="My Ads"
              
              component={MyAds}
              options={{
                  headerShown: false,
              }}
          />
          <Stack.Screen
              name="Mechanics"
              
              component={Mechanics}
              options={{
                  headerShown: false,
              }}
          />
          <Stack.Screen
              name="Contact"
              
              component={Contact}
              options={{
                  headerShown: false,
              }}
          />
          <Stack.Screen
              name="About"
              component={About}
              options={{
                  headerShown: false,
              }}
          />
          
      </Stack.Navigator>
  )
}
const BottomNavCus = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#42207A"
    inactiveColor="black"
    labelStyle={{ fontSize: 12 }}
    style={{ backgroundColor: 'transparent' }}
  >
          <Tab.Screen
        name="Home"
        component={CustomerLanding}
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
     <Tab.Screen
        name="Chat"
        component={Direction}
        options={{
          headerShown:false,
          tabBarLabel: 'Map',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Add Ad"
        component={Addad}
        options={{
          headerShown:false,
          tabBarLabel: 'Add Ad',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
          ),
        }}
      />
          {/* <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      /> */}
          <Tab.Screen
        name="My account"
        component={MyAcc}
        options={{
          headerShown:false,
          tabBarLabel: 'My account',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
  )
}


const BottomNav = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#42207A"
    inactiveColor="black"
    labelStyle={{ fontSize: 12 }}
    style={{ backgroundColor: 'transparent' }}
  >
          <Tab.Screen
        name="Home"
        component={RepairHome}
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
     {/* <Tab.Screen
        name="Chat"
        component={Direction}
        options={{
          headerShown:false,
          tabBarLabel: 'Chat',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      /> */}

<Tab.Screen
        name="Add Ad"
        component={Mechanics}
        options={{
          headerShown:false,
          tabBarLabel: 'Add Ad',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
          ),
        }}
      />
          {/* <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      /> */}
          <Tab.Screen
        name="My account"
        component={MyAcc}
        options={{
          headerShown:false,
          tabBarLabel: 'My account',
          tabBarColor:'#EFDEFF',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
  )
}
export default App;






