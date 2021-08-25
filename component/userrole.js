import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, Button } from 'react-native';
import {useNavigation  } from '@react-navigation/native';
export default function UserRole() {
  //const [number, onChangeNumber] = React.useState(null);
  //const { onPress, title = 'Submit' } = props;
  const navigation =  useNavigation();
  return (
    <View style={styles.container}>
      <Image
      style={{position:'absolute', bottom:'50%',left:'0.1%', width:390,height:255}}
      source={require('../assets/images/role-1.png')}
      //resizeMode="contain"
      />
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text> 
      <Image
      style={{position:'absolute', bottom:'90%',left:'3%', width:24 ,height:24}}
      source={require('../assets/images/backicon.png')}
      />
      <Text style={{position:'absolute',left:'4%',top:'55%',color:'#42207A',fontSize:25,fontWeight:'bold'}}>
      Are you a Customer or a Repair Station?
      </Text>
      
      <TouchableOpacity style={{ paddingVertical:2,borderColor:'#42207A',borderWidth:1, height:120, width:120, position:'absolute',top:'71%',left:'10%',borderRadius:5}} onPress={() => navigation.navigate('HomeScreen')}>
      <Image
      style={{position:'absolute', bottom:'12%',left:'20%', width:64,height:90}}
      source={require('../assets/images/a.png')}
      />
     </TouchableOpacity>
     <TouchableOpacity  style={{ paddingVertical:2,borderColor:'#42207A',borderWidth:1, height:120, width:120, position:'absolute',top:'71%',left:'60%',borderRadius:5}} onPress={() => navigation.navigate('Repair1')}>
      <Image
      style={{position:'absolute', bottom:'12%',left:'10%', width:95,height:90}}
      source={require('../assets/images/b.png')}
      />
     </TouchableOpacity>
     <Text style={{position:'absolute',left:'14%',top:'88%',color:'black',fontSize:20,fontWeight:'bold'}}>
      Customer
     </Text>
     <Text style={{position:'absolute',left:'59%',top:'88%',color:'black',fontSize:20,fontWeight:'bold'}}>
      Repair Station
     </Text>
  
    
        
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
   
  button: {
    backgroundColor: '#42207A',
    borderColor: '#42207A',
    borderWidth: 5,
    position:'absolute',
    bottom:'60%'  

 }
    
});
