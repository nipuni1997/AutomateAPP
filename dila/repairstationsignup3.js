import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View,TouchableOpacity, Pressable ,Image, TextInput } from 'react-native';
import Axios from 'axios';
export default function Repair3(props) {
  const navigation =  useNavigation();
  const { onPress, title = 'Continue' } = props;
  const [description,setInput]=useState('');
  const register = ()=>{
    Axios.post('http://192.168.1.16:3001/user/registerrepair',{
     
      description:description
     
  
   }).then((response)=>{
    console.log(response);
    navigation.navigate('Repair4');
    }
    // console.log(response.data[0].userrole);
    
  );
};

  return (
    <View style={styles.container}>
      <Image
      style={{position:'absolute', bottom:'50%',left:35, width:"100%",height:275}}
      source={require('../assets/images/image1.png')}
      //resizeMode="contain"
      />
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text> 

      <Text style={{position:'absolute',left:'5%',bottom:'50%',color:'black',fontSize:14,fontWeight:'bold'}}>
        Add a description including your services. (Not Required)
      </Text>
      
      
      <TextInput
        style={styles.input}
        onChangeText={(e)=>setInput(e)}
        multiline={true}
        numberOfLines={3}
        //value={number}
       // keyboardType="numeric"
        placeholder="Description"
      />
      
      <Pressable style={styles.button} onPress={register}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>

    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Repair2')}>
    <Text style={styles.text1}>Back</Text>
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
    input: {
      textAlign:'center',
      fontWeight:'bold',
      top:125,
      height: 50,
      width:275,
      margin: 12,
      borderWidth: 3,
      borderColor:'#42207A'
    },
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:'8%',
      left:'53%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#42207A',
      borderRadius:5,
    },
    button1:{
      borderColor:'#42207A',
      borderWidth:5, 
      height:45,
      bottom:'8%', 
      width:100, 
      left:'10%',
      position:'absolute',
      borderRadius:5
    },
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    text1:{
      color:'#42207A', 
      textAlign:'center',
      fontWeight:'bold',
      letterSpacing: 0.25,
      fontSize:20,
    },
});
