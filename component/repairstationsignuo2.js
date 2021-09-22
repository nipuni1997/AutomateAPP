import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View,TouchableOpacity, Pressable ,Image, TextInput } from 'react-native';
import Axios from 'axios';
export default function Repair2(props) {
  //const [text, onChangeText] = React.useState(null);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [tel, setTel] = useState('');
  const [description, setDesc] = useState('');
  const { onPress, title = 'Continue' } = props;
  const navigation =  useNavigation();
  const register = ()=>{
    Axios.post('http://192.168.1.16:3001/user/registerrepair',{
     address:address,
      city:city,
      province:province,
     tel:tel,
     description:description
  
   }).then((response)=>{
    console.log(response);
    navigation.navigate('Repair3')
     
    }
    // console.log(response.data[0].userrole);
    
  );
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
        keyboardType="numeric"
        placeholder="Telephone"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setDesc(val)}
        //value={text}
       // keyboardType="text"
        placeholder="Description"
      />
      
      <Pressable style={styles.button} onPress={register} >
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
