import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, Button } from 'react-native';

export default function App() {
  //const [number, onChangeNumber] = React.useState(null);
  //const { onPress, title = 'Submit' } = props;
  return (
    <View style={styles.container}>
      <Image
      style={{position:'absolute', bottom:'40%',left:'3%', width:367,height:350}}
      source={require('./assets/images/spare-1.png')}
      //resizeMode="contain"
      />
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text> 

      
      <TouchableOpacity style={{ paddingVertical:2,borderColor:'#42207A',borderWidth:5, height:50, width:195, position:'absolute',top:'71%',borderRadius:5}}>
    <Text style={{color:'#42207A', textAlign:'center',fontWeight:'bold',fontSize:25}}>Sign in</Text>
     </TouchableOpacity>

      <TouchableOpacity style={{paddingVertical:6, height:50, width:195, position:'absolute',top:'83%',borderRadius:5, backgroundColor:'#42207A' }}>
    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:25}}>Register</Text>
</TouchableOpacity>
     
  
    
        
      
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
