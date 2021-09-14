import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function RepairHome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>
      
        <Image style={{position:'absolute', bottom:'90%',right:'90%', width:"5%",height:'5%'}}
      source={require('../assets/images/menuicon.png')} />

      <View style={styles.subContainer}>

      <Text style={styles.text}>Name of repair station :</Text>
      <Text style={styles.text}>Address :</Text>
      <Text style={styles.text}>City :</Text>
      <Text style={styles.text}>Province :</Text>
      <Text style={styles.text}>Tel1 :</Text>
      <Text style={styles.text}>Tel2 :</Text>
      <Text style={styles.text}>E-mail :</Text>
      <Text style={styles.text}>Description :</Text>
      <Text style={styles.text}>Mechanics :</Text>

      <View style={styles.subContainer1}>
      <View style={{ backgroundColor: "#EFDEFF", flex: 0.4 , margin:10}} >
        <Image style={{width:'100%',height:'100%'}} source={require('../assets/images/man.png')}/>
        <Text style={styles.text1}>
        <Text style={{position:'absolute',top:'100%'}}>Name :</Text>
        <Text style={{position:'absolute',top:'130%'}}>Tel :</Text>
        </Text>
      </View>
      
      <View style={{ backgroundColor: "#EFDEFF", flex: 0.4,margin:10 }} >
        <Image style={{width:'100%',height:'100%'}} source={require('../assets/images/man.png')}/>
        <Text style={styles.text1}>
        <Text style={{position:'absolute',top:'100%'}}>Name :</Text>
        <Text style={{position:'absolute',top:'130%'}}>Tel :</Text>
        </Text>
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
    height:'65%',
    top:'10%',
    //paddingLeft:5,
    backgroundColor: '#EFDEFF'
   },
   subContainer1:{
    flexDirection: "row",
    height: 140,
    padding: 20,
   
   },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      //position:'absolute',
      //left:'5%'

    },
    text1:{
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      
    }
});
