import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Pressable ,Image, TextInput,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard } from 'react-native';
import Axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Repair1(props) {
  //const [text, onChangeText] = React.useState(null);
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [tel, setTel] = useState('');
  const [description, setDesc] = useState('');
  const { onPress, title = 'Submit' } = props;
  const navigation =  useNavigation();


 const register = ()=>{
   Axios.post('http://192.168.1.16:3001/user/registerrepair',{
    
     userName:name,
     email:email,
    password:password,
    address:address,
    city:city,
    province:province,
   tel:tel,
   description:description
 
  }).then((response)=>{
    console.log(response);
    navigation.navigate('Login')
     
    }
    // console.log(response.data[0].userrole);
    
  );
};
  return (
   
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}   >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.inner}>
    
      {/* <Image
      style={{position:'absolute', bottom:'50%',left:35, width:"100%",height:275}}
      source={require('../assets/images/image1.png')}
      //resizeMode="contain"
      /> */}
      <Text style={styles.header}>
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
        onChangeText={(val)=>setAddress(val)}
        //value={text}
       // keyboardType="text"
        placeholder="Address"
      />
       <TextInput
        style={styles.input}
        onChangeText={(val)=>setCity(val)}
        //value={text}
       // keyboardType="text"
        placeholder="City"
      />
        <TextInput
        style={styles.input}
        onChangeText={(val)=>setProvince(val)}
       // value={text}
       // keyboardType="text"
        placeholder="Province"
      />
      <TextInput
        style={styles.input}
        onChangeNumber={(val)=>setTel(val)}
        //value={number}
        // keyboardType="numeric"
        placeholder="Telephone"
      />
        <TextInput
        style={styles.input}
        onChangeText={(val)=>setDesc(val)}
        //value={text}
       // keyboardType="text"
        placeholder="Description"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e)=>setPassword(e)}
        secureTextEntry={true}
        //value={number}
        //keyboardType="numeric"
        placeholder="Password"
      />
      
      <Pressable style={styles.button} onPress={register}  >
      <Text style={styles.text}>{title}</Text>
    </Pressable>

    <Text style={styles.subtext}>Already have an account?</Text>
    <Text style={styles.subtext1} onPress={() => navigation.navigate('Login')}>Login</Text>
     

      <StatusBar style="auto" />
    
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: "center",
  },
  header:{
marginBottom:48,
fontSize:25,
color:'#42207A',
fontWeight:'bold',
left:190
// {position:'absolute',left:'130%',  marginBottom:48,color:'#42207A',fontSize:25, }

  },
  subtext:{
    color:'black',
    // top:800,
    left:50,
   top:8,
    fontWeight:'bold'
  },
  subtext1:{
    color:'black',
    // top:800,
    left:230,
    top:8,
    // marginBottom:10,
    fontWeight:'bold'
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
    button: {
      alignItems: 'center',
      position:'absolute',
    top:800,
     left:180,
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
