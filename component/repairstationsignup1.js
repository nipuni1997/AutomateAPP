import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Pressable ,Image, TextInput } from 'react-native';
import Axios from 'axios';
export default function Repair1(props) {
  //const [text, onChangeText] = React.useState(null);
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const { onPress, title = 'Continue' } = props;
  const navigation =  useNavigation();


 const register = ()=>{
   Axios.post('http://192.168.8.103:3001/registerrepair',{
    
     userName:name,
     email:email,
    address:address
 
  }).then(response => response.json())
  .then(response => {
    console.log(response)
  })
  .catch(error => alert("Error " + error))
  
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
      
      <TextInput
        style={styles.input}
        onChangeText={(e)=>setEmail(e)}
        //value={text}
       // keyboardType="text"
        placeholder="E-MAIL"
      />
     <TextInput
        style={styles.input}
        onChangeText={(e)=>setName(e)}
       // value={text}
       // keyboardType="text"
        placeholder="Name of Repair Station"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e)=>setAddress(e)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Address"
      />
      
      <Pressable style={styles.button} onPress={() => navigation.navigate('Repair2')}  >
      <Text style={styles.text}>{title}</Text>
    </Pressable>

    <Text style={{color:'black',position:'absolute',bottom:'4%',left:'25%',fontWeight:'bold'}}>Already have an account?</Text>
    <Text style={{color:'#42207A',position:'absolute',bottom:'4%',left:'70%',fontWeight:'bold'}} onPress={() => navigation.navigate('Login')}>Login</Text>
     

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
      margin: 10,
      borderWidth: 3,
      borderColor:'#42207A'
    },
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:'11%',
      left:'47%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#42207A',
      borderRadius:5,
    },
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});
