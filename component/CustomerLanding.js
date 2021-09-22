import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, Button } from 'react-native';
import {useNavigation  } from '@react-navigation/native';
export default function CustomerLanding() {
  //const [number, onChangeNumber] = React.useState(null);
  //const { onPress, title = 'Submit' } = props;
  const navigation =  useNavigation();
  return (
    <View style={styles.container}>
      <Image
      style={{position:'absolute', bottom:'50%',left:'10%', width:350,height:330}}
      source={require('../assets/images/customerland.jpg')}
      //resizeMode="contain"
      />
      {/* <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>  */}
     
      <Text style={{position:'absolute',left:'4%',top:'55%',color:'#42207A',fontSize:25,fontWeight:'bold'}}>
      What are you looking for?
      </Text>
      
      <TouchableOpacity style={{ paddingVertical:2,borderColor:'#42207A',borderWidth:1, height:120, width:120, position:'absolute',top:'71%',left:'10%',borderRadius:5}} onPress={() => navigation.navigate('SearchRepair')}>
      <Image
      style={{position:'absolute', bottom:'12%',left:'20%', width:64,height:90}}
      source={require('../assets/images/repaistation.png')}
      />
     </TouchableOpacity>
     <TouchableOpacity  style={{ paddingVertical:2,borderColor:'#42207A',borderWidth:1, height:120, width:120, position:'absolute',top:'71%',left:'60%',borderRadius:5}} onPress={() => navigation.navigate('CustomerHome')}>
      <Image
      style={{position:'absolute', bottom:'12%',left:'10%', width:95,height:90}}
      source={require('../assets/images/sparepart.png')}
      />
     </TouchableOpacity>
     <Text style={{position:'absolute',left:'8%',top:'88%',color:'black',fontSize:17,fontWeight:'bold'}}>
      Repair Stations
     </Text>
     <Text style={{position:'absolute',left:'64%',top:'88%',color:'black',fontSize:17,fontWeight:'bold'}}>
      Spare Parts
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
