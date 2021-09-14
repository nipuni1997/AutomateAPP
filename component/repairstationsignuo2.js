import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View,TouchableOpacity, Pressable ,Image, TextInput } from 'react-native';
import Axios from 'axios';
export default function Repair2(props) {
  //const [text, onChangeText] = React.useState(null);
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [tel, setTel] = useState('');
  const { onPress, title = 'Continue' } = props;
  const navigation =  useNavigation();
  const register = ()=>{
    Axios.post('http://192.168.8.103:3001/registerrepair',{
     
      city:city,
      province:province,
     tel:tel
  
   }).then(response => response.json())
   .then(response => {
     console.log(response)
   })
   .catch(error => alert("Error " + error))
   
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
        keyboardType="numeric"
        placeholder="Telephone"
      />
      
      <Pressable style={styles.button} onPress={() => navigation.navigate('Repair3')} >
      <Text style={styles.text}>{title}</Text>
    </Pressable>

    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Repair1')}>
    <Text style={styles.text1}>Back</Text>
     </TouchableOpacity>

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
      top:125,
      height: 50,
      width:275,
      margin: 12,
      borderWidth: 3,
      borderColor:'#42207A'
    },
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:'8%',
      left:'53%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#42207A',
      borderRadius:5,
    },
    button1:{
      borderColor:'#42207A',
      borderWidth:5, 
      height:45,
      bottom:'8%', 
      width:100, 
      left:'10%',
      position:'absolute',
      borderRadius:5
    },
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    text1:{
      color:'#42207A', 
      textAlign:'center',
      fontWeight:'bold',
      letterSpacing: 0.25,
      fontSize:20,
    },
});
