//import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyAds from './myads';
import Mechanics from './mechaniclist';
import Contact from './contactus';
import About from './aboutus';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My Ads" component={MyAds} />
      <Drawer.Screen name="Mechanics" component={Mechanics} />
      <Drawer.Screen name="Contact Us" component={Contact} />
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
