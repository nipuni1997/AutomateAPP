import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet,Keyboard, Text, View, Pressable ,Image,Platform, TextInput,KeyboardAvoidingView, TouchableWithoutFeedback, Button } from 'react-native';
import {useNavigation  } from '@react-navigation/native';
import Axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen(props) {
 // const [number, onChangeNumber] = React.useState(null);
 const [email, setEmail] = React.useState(null);
 const [name, setName] = React.useState(null);
 const [password, setPassword] = React.useState(null);
 const { onPress, title = 'Sign up' } = props;
 const navigation =  useNavigation();
 const register = ()=>{
   Axios.post('http://localhost3001/register',{
     userName:name,
     email:email,
    password:password
  }).then((response)=>{
    console.log(response);
  });
 };
 
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
  >
    <TouchableWithoutFeedback  onPress={Keyboard.dismiss} >
   
    <View style={styles.container}>
      <Image
      style={{position:'absolute', bottom:'50%',left:35, width:"100%",height:275}}
      source={require('../assets/images/image1.png')}
      //resizeMode="contain"
      />
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text> 
      
      <TextInput
        style={styles.input}
        onChange={(e)=>{setEmail(e.target.value);}}
        //value={number}
        //keyboardType="numeric"
        placeholder="E-MAIL"
      />
     <TextInput
        style={styles.input}
        onChange={(e)=>{setName(e.target.value);}}
        //value={number}
        //keyboardType="numeric"
        placeholder="NAME"
      />
      <TextInput
        style={styles.input}
        onChange={(e)=>{setPassword(e.target.value);}}
        //value={number}
        //keyboardType="numeric"
        placeholder="PASSWORD"
      />
      <Button title="Sign Up" style={styles.button} onPress={register}/>
  

      <Text style={{color:'black',position:'absolute',bottom:'8.7%',left:'35%',fontWeight:'bold'}}>Or register with</Text>
      <Image
      style={{position:'relative', bottom:'8.3%',left:'63%', width:"8%",height:27}}
      source={require('../assets/images/googleicon.png')}
      />
      <Text style={{color:'black',position:'absolute',bottom:'4%',left:'25%',fontWeight:'bold'}}>Already have an account?</Text>
      <Text style={{color:'#42207A',position:'absolute',bottom:'4%',left:'70%',fontWeight:'bold'}} onPress={() => navigation.navigate('Login')} >Login</Text>

      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
   </KeyboardAvoidingView> 
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
      top:100,
      height: 50,
      width:275,
      margin: 10,
      borderWidth: 3,
      borderColor:'#42207A'
    },
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:'14%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#42207A',
    },
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});
