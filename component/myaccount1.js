import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput , TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback} from 'react-native';

export default function App(props) {
  const [userName, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('');
  const [telephone, setTelephone] = useState('');

  const edit = ()=>{
    Axios.post('http://192.168.1.16:3001/repair/editshop',{
     
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
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}   >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
    
      
      
      <View style={styles.inner}>
        <Text style={{position:'absolute',left:'25%', top:'10%',color:'black',fontSize:25,fontWeight:'bold' }}>
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

      

  
      
      <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    textAlign:'center',
    fontWeight:'bold',
    // top:20,
    height: 50,
    width:275,
    margin: 10,
    borderWidth: 3,
    borderColor:'#42207A',
    // padding:1,
    marginBottom:36
  //  flexShrink:2
    // paddingVertical: 10,
    // paddingHorizontal: 10
    // height: 40,
    // borderColor: "#000000",
    // borderBottomWidth: 1,
    // marginBottom: 36
  },
  inner: {
    padding: 100,
    flex: 1,
    justifyContent: "space-around"
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
      backgroundColor:'#42207A',
      borderWidth:5, 
      height:45,
      bottom:'8%', 
      width:100, 
      left:'150%',
      position:'absolute',
      borderRadius:5
    },
    text1:{
      top:5,
      color:'white', 
      textAlign:'center',
      fontWeight:'bold',
      letterSpacing: 0.25,
      fontSize:17,
    }
    
});
