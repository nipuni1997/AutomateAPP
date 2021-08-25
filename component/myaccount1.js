import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput , TouchableOpacity} from 'react-native';

export default function App(props) {
  const [name, setName] = React.useState(null);
  const [city, setCity] = React.useState(null);
  const [message, setAddress] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [province, setProvince] = React.useState(null);
  const [telephone, setTelephone] = React.useState(null);
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
     <TouchableOpacity style={styles.button1}>
    <Text style={styles.text1}>Back</Text>
     </TouchableOpacity>

      

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
    button1:{
      borderColor:'#42207A',
      backgroundColor:'white',
      borderWidth:5, 
      height:45,
      bottom:'8%', 
      width:100, 
      left:'10%',
      position:'absolute',
      borderRadius:5
    },
    text1:{
      color:'#42207A', 
      textAlign:'center',
      fontWeight:'bold',
      letterSpacing: 0.25,
      fontSize:20,
    }
    
});
