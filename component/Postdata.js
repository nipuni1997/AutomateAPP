import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
}from 'react-native';


export default function Postdata() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");



 const submit= ()=>{
    
     axios.post("http://192.168.8.103:3001/postData",{
        name:name,
        email:email,
        password:password

     });
   
  
 } 

    return (
        <View style={styles.container}>
            <TextInput
            placeholder="enter your name"
            onChangeText={(e)=>setName(e)}


            />
             <TextInput
            placeholder="enter your email"
            onChangeText={(e)=>setEmail(e)}


            />
        <TextInput
            placeholder="enter your password"
            onChangeText={(e)=>setPassword(e)}


            />
            <Button title="submit" onPress={
                submit
            }/>
       
       
       
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
