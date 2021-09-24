import { StatusBar } from 'expo-status-bar';
import React ,{useState,useContext} from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput,SafeAreaView,KeyboardAvoidingView,Alert,TouchableWithoutFeedback,Keyboard, Platform} from 'react-native';
import {useNavigation  } from '@react-navigation/native';
// import { AuthContext } from '../helpers/AuthContext';
import Axios from 'axios';
import MyDrawer from './drawer';
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
     if(response.data[0].userrole=='repair'){
      navigation.navigate('RepairHome');
      
      console.log(response.data[0].userrole);
    }
   else if(response.data[0].userrole=='customer') {
    navigation.navigate('CustomerLanding');
   }else {
     Alert.alert(
       'Alert',
       'Login Credentials are wrong!!',
       [
         {
           text:"OK",
           onPress:()=>console.log("Pressed"),
           style:"default"
         }
       ]);
  

    }
    
    
    // console.log(response.data[0].userrole);
    
  });
 };



 validate = (e) => {
  console.log(e);
  let reg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (reg.test(e) === false) {
    console.log("Email is Not Correct");
    setEmail({ email: e })
    return false;
  }
  else {
    setEmail({ email: e })
    console.log("Email is Correct");
  }
}
  return (
   <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex:1}}   >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
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
        // onChangeText={(foo) => { this.setState({foo}); DoMath(); } }
        //value={number}
        //keyboardType="numeric"
        placeholder="E-MAIL"
      />
     <TextInput
        style={styles.input}
        onChangeText={(e)=>setPassword(e)}
        secureTextEntry={true}
        //value={number}
        // keyboardType=""
        placeholder="PASSWORD"
      />
    
      
      <Text style={{position:'absolute',textAlign:'center',bottom:60,color:'#42207A',fontWeight:'bold',padding:4}} onPress={() => navigation.navigate('Forgot')}>
      Forgot Password?
      </Text>
      <Pressable style={styles.button} onPress={login}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>

     
      <Text style={{color:'black',position:'absolute',bottom:45,left:'25%',fontWeight:'bold'}}>Don't have an account?</Text>
      <Text style={{color:'#42207A',position:'absolute',bottom:45,left:'65%',fontWeight:'bold'}} onPress={() => navigation.navigate('UserRole')}>Register</Text>
      
      <StatusBar style="auto" />
      </View>
       {/* </TouchableWithoutFeedback> */}
     {/* </View> */}
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
  // image:{
    
  //    top:-100,
  //    left:40,
  //     width:300,
  //     height:270


  // },
    input: {
      textAlign:'center',
      fontWeight:'bold',
      top:140,
      height: 50,
      width:275,
      margin: 20,
      borderWidth: 3,
      borderColor:'#42207A'
    },
    button: {
      alignItems: 'center',
      position:'absolute',
      top:670,
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
