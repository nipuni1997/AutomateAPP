import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput , TouchableOpacity} from 'react-native';

export default function App(props) {
  const [userName, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('');
  const [telephone, setTelephone] = useState('');

  const edit = ()=>{
    Axios.post('http://192.168.8.103:3001/editshop',{
     
      userName:userName,
      city:city,
      address:address,
      email:email,
      province:province,
      telephone:telephone

  
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
      source={require('../assets/images/menuicon.png')} />
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
     <TouchableOpacity style={styles.button1} onPress={edit}>
    <Text style={styles.text1}>Edit</Text>
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
