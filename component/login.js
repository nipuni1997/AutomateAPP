import { StatusBar } from 'expo-status-bar';
import React ,{useState,useContext} from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput } from 'react-native';
import {useNavigation  } from '@react-navigation/native';
// import { AuthContext } from '../helpers/AuthContext';
import Axios from 'axios';
export default function App(props) {
  //const [number, onChangeNumber] = React.useState(null);
  // const user = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onPress, title = 'Login' } = props;
  const navigation =  useNavigation();
  // const userId=user.userId;

  const login = ()=>{
    Axios.post('http://192.168.1.16:3001/user/login',{
     
      // userId:userId,
      email:email,
     password:password
  
   }).then((response)=>{
    if(response.data[0].userrole=='customer'){
      navigation.navigate('CustomerHome');
     
    }
    // console.log(response.data[0].userrole);
    
  });
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
        //value={number}
        //keyboardType="numeric"
        placeholder="E-MAIL"
      />
     <TextInput
        style={styles.input}
        onChangeText={(e)=>setPassword(e)}
        //value={number}
        //keyboardType="numeric"
        placeholder="PASSWORD"
      />
      <Text style={{position:'absolute',left:'56%',top:'70%',color:'#42207A',fontSize:13,fontWeight:'bold'}} onPress={() => navigation.navigate('Forgot')}>
      Forgot Password?
      </Text>
      <Pressable style={styles.button} onPress={login}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>

      <Text style={{color:'black',position:'absolute',bottom:'10%',left:'35%',fontWeight:'bold'}}>Or register with</Text>
      <Image
      style={{position:'absolute', bottom:'9.6%',left:'63%', width:"8%",height:27}}
      source={require('../assets/images/googleicon.png')}
      />
      <Text style={{color:'black',position:'absolute',bottom:'5%',left:'25%',fontWeight:'bold'}}>Don't have an account?</Text>
      <Text style={{color:'#42207A',position:'absolute',bottom:'5%',left:'65%',fontWeight:'bold'}} onPress={() => navigation.navigate('UserRole')}>Register</Text>

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
      top:100,
      height: 50,
      width:275,
      margin: 20,
      borderWidth: 3,
      borderColor:'#42207A'
    },
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:'15%',
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
