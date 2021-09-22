import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import Axios from 'axios';
import { StyleSheet, Text, View, Pressable ,Image, TextInput } from 'react-native';


export default function App(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onPress, title = 'Submit' } = props;
  const navigation =  useNavigation();

  const forget = ()=>{
    Axios.post('http://192.168.1.16:3001/user/forget',{
      email:email,
     password:password
  
   }).then((response)=>{
     console.log(response);
    navigation.navigate('Login');
   });
  };

  
  return (
    <View style={styles.container}>
      <Image
      style={{position:'absolute', bottom:'40%', width:300,height:300}}
      source={require('../assets/images/forget-1.png')}
      //resizeMode="contain"
      />
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text> 
      
      <TextInput
        style={styles.input}
        onChangeText={(e)=>setEmail(e)}
        value={email}
        //keyboardType="numeric"
        placeholder="E-MAIL"
      />
        
        <TextInput
        style={styles.input}
        onChangeText={(e)=>setPassword(e)}
        value={password}
        //keyboardType="numeric"
        placeholder="Password"
      />
     
      
      <Pressable style={styles.button} onPress={forget}>
      <Text style={styles.text}>{title}</Text>
      </Pressable>

      <Text style={{color:'black',position:'absolute',bottom:'9%',left:'37%',fontWeight:'bold',fontSize:15}}>Back to</Text>
      <Text style={{color:'#42207A',position:'absolute',bottom:'9%',left:'53%',fontWeight:'bold',fontSize:15}} onPress={() => navigation.navigate('Login')} >Login</Text>

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
      top:150,
      height: 50,
      width:275,
      margin: 10,
      borderWidth: 3,
      borderColor:'#42207A'
    },
    button: {
      alignItems: 'center',
      position:'absolute',
      top:650,
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
