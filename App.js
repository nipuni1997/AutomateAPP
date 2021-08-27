import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeScreen from './component/signup';
import Login from './component/login';
import Landing from './component/landing';
import UserRole from './component/userrole';
import Repair1 from './component/repairstationsignup1';
import Repair2 from './component/repairstationsignuo2';
import Repair3 from './component/repairstationsignup3';
import Repair4 from './component/repairstationsignup4';
import Forgot from './component/forgot';
const Stack = createNativeStackNavigator();

 function App() {

  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
