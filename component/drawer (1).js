// import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyAds from './Postdata';
import Mechanics from './Selectdata';
import Contact from './myaccount1';
import About from './myaccount2';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My Ads" component={MyAds} />
      <Drawer.Screen name="Mechanics list" component={Mechanics} />
      <Drawer.Screen name="Contacts" component={Contact} />
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
