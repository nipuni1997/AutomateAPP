import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput } from 'react-native';
import Axios from 'axios';

export default function App(props) {
  const [userName, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setAddress] = useState('');

  const register = ()=>{
    Axios.post('http://192.168.8.103:3001/registermechanics',{
     
      userName:userName,
      phonenumber:phonenumber,
      message:message
  
   }).then(response => response.json())
   .then(response => {
     console.log(response)
   })
   .catch(error => alert("Error " + error))
   
  };
  return (
    <View style={styles.container}>
    
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>
      
        <Image style={{position:'absolute', bottom:'90%',right:'90%', width:"5%",height:'5%'}}
      source={require('./assets/images/menuicon.png')} />
      <View style={styles.subContainer}>
        <Text style={{position:'absolute',left:'5%', bottom:'90%',color:'black',fontSize:25,fontWeight:'bold' }}>
        Add Details of Mechanic Staff.
      </Text>
      
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setName(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Mechanic's Name"
      />
       <TextInput
        style={styles.input}
        onChangeText={(val)=>setPhonenumber(val)}
        //value={number}
        keyboardType="numeric"
        placeholder="Mechanic's Telephone Number"
      />
     
     <TextInput
        style={styles.input}
        onChangeText={(val)=>setAddress(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Upload an image"
      />
    
      
    <Pressable style={styles.button} onPress={register}>
      <Text style={styles.text}>{title}</Text>
      </Pressable>
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
  subContainer:{
   width:'90%',
   height:'70%',
   top:'5%',
    backgroundColor: '#EFDEFF'
  },
    input: {
      borderRadius:4,
      textAlign:'left',
      fontWeight:'bold',
      backgroundColor:'white',
      top:'10%',
      height: 50,
      width:'90%',
      margin: 20,
      borderWidth: 1,
      borderColor:'#42207A'
    },
    
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    
});
