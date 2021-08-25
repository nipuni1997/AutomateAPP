import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput } from 'react-native';
import {useNavigation  } from '@react-navigation/native';
export default function App(props) {
  //const [number, onChangeNumber] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const { onPress, title = 'Login' } = props;
  const navigation =  useNavigation();
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
        onChangeText={(val)=>setEmail(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="E-MAIL"
      />
     <TextInput
        style={styles.input}
        onChangeText={(val)=>setPassword(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="PASSWORD"
      />
      <Text style={{position:'absolute',left:'56%',top:'70%',color:'#42207A',fontSize:13,fontWeight:'bold'}} onPress={() => navigation.navigate('Forgot')}>
      Forgot Password?
      </Text>
      <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>

      <Text style={{color:'black',position:'absolute',bottom:'10%',left:'35%',fontWeight:'bold'}}>Or register with</Text>
      <Image
      style={{position:'absolute', bottom:'9.6%',left:'63%', width:"8%",height:27}}
      source={require('../assets/images/googleicon.png')}
      />
      <Text style={{color:'black',position:'absolute',bottom:'5%',left:'25%',fontWeight:'bold'}}>Don't have an account?</Text>
      <Text style={{color:'#42207A',position:'absolute',bottom:'5%',left:'65%',fontWeight:'bold'}} onPress={() => navigation.navigate('HomeScreen')}>Register</Text>

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
