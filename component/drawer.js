//import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import MyAds from './myads';
//import Mechanics from './mechaniclist';
//import Contact from './contactus';
import About from './aboutus';
import Chat from './chat';
//import Land from './landing';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;

/*export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}*/
