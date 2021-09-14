import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput , TouchableOpacity} from 'react-native';

export default function App(props) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [message, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('');
  const [telephone, setTelephone] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [retype, setRetype] = useState('');
  const { onPress, title = 'Submit' } = props;
  return (
    <View style={styles.container}>
    
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>
      
        <Image style={{position:'absolute', bottom:'90%',right:'90%', width:"5%",height:'5%'}}
      source={require('./assets/images/menuicon.png')} />
      <View style={styles.subContainer}>
        <Text style={{position:'absolute',left:'5%', bottom:'90%',color:'black',fontSize:25,fontWeight:'bold' }}>
        My Account
      </Text>
      
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setName(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Shop Name"
      />
       <TextInput
        style={styles.input}
        onChangeText={(val)=>setEmail(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="E-mail"
      />
     
     <TextInput
        style={styles.input}
        onChangeText={(val)=>setAddress(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Address"
      />
    <TextInput
        style={styles.input}
        onChangeText={(val)=>setCity(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="City"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setProvince(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Province"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setTelephone(val)}
        //value={number}
        keyboardType="numeric"
        placeholder="Telephone"
      />
     
     <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>

    <Text style={{position:'absolute',left:'5%', bottom:'30%',color:'black',fontSize:25,fontWeight:'bold' }}>
        Edit Password
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={(val)=>setNewpassword(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="New Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setRetype(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Re-type Password"
      />
      <Pressable style={styles.button1} onPress={onPress}>
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
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:'25%',
      left:'30%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#42207A',
    },
    button1: {
      alignItems: 'center',
      position:'absolute',
      bottom:'10%',
      left:'30%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#42207A',
    },
    textButton: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    
});
