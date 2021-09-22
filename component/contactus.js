import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput } from 'react-native';

export default function App(props) {
  //const [number, onChangeNumber] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [phonenumber, setPhonenumber] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const { onPress, title = 'SEND' } = props;
  return (
    <View style={styles.container}>
{/*     
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text> */}
      
        {/* <Image style={{position:'absolute', bottom:'90%',right:'90%', width:"5%",height:'5%'}}
      source={require('../assets/images/back.png')} /> */}
      <View style={styles.subContainer}>
        <Text style={{position:'absolute',left:'5%', bottom:'90%',color:'black',fontSize:25,fontWeight:'bold' }}>
        CONTACT US
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
        onChangeText={(val)=>setName(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="NAME"
      />
     <TextInput
        style={styles.input}
        onChangeText={(val)=>setAddress(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="ADDRESS"
      />
         <TextInput
        style={styles.input}
        onChangeText={(val)=>setPhonenumber(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="PHONE NUMBER"
      />
        <TextInput
        style={styles.input}
        onChangeText={(val)=>setMessage(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="MESSAGE"
      />
    
      <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
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
  subContainer:{
   width:'90%',
   height:'80%',
   top:-30,
    backgroundColor: 'white',
    borderWidth:5,
    borderColor:'#42207A'
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
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:30,
      left:'60%',
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
    textButton: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});
