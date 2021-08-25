import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable ,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>
      
        <Image style={{position:'absolute', bottom:'90%',right:'90%', width:"5%",height:'5%'}}
      source={require('./assets/images/menuicon.png')} />
      <View style={styles.subContainer}>
        <Text style={{position:'absolute',left:'5%', bottom:'90%',color:'black',fontSize:25,fontWeight:'bold' }}>
        Details of the Added Member
      </Text>
      <View style={styles.subContainer1}>
        <View style={{flex: 0.6 , margin:10, backgroundColor:'white'}}>
        <Image style={{width:'100%',height:'100%'}} source={require('./assets/images/man.png')}/>
        </View >
        <View style={{flex: 0.8 , margin:10, backgroundColor:'white',top:'80%'}}>
          <Text style={styles.text}>Hasith Silva</Text>
          <Text style={styles.text}>071-2637598</Text>
        </View>
      </View>

    </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer:{
   width:'90%',
   height:'80%',
   top:'5%',
   backgroundColor: '#EFDEFF'
  },
  subContainer1:{
    flexDirection: "row",
    height: 140,
    padding: 20,
   // top:'80%'
   },
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});
