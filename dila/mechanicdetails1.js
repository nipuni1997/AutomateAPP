import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput ,KeyboardAvoidingView,Button,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/core';

export default function App(props) {
  const [userName, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
 const navigation=useNavigation();
  const { onPress, title = 'Add' } = props;


  const register = ()=>{
    Axios.post('http://192.168.1.16:3001/repair/registermechanics',{
     
      name:userName,
      tel:phonenumber,
     
  
   }).then((response)=>{
    console.log(response);
    navigation.navigate('Mechanics');
  });
 };
  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };
  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}   >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.inner}>
    
    
     
      <View style={styles.subContainer}>
        <Text style={{position:'absolute',left:-50,top:-200,alignItems: 'center', bottom:'100%',color:'black',fontSize:25,fontWeight:'bold' }}>
        Add Details of Mechanic Staff
      </Text>
      
      <TextInput
        style={styles.input}
        onChangeText={(e)=>setName(e)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Mechanic's Name"
      />
       <TextInput
        style={styles.input}
        onChangeText={(e)=>setPhonenumber(e)}
        //value={number}
        keyboardType="numeric"
        placeholder="Mechanic's Telephone Number"
      />
    
 
    
      
    <Pressable style={styles.button} onPress={register}>
      <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
      
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
  button: {
    alignItems: 'center',
    position:'absolute',
    bottom:5,
    left:'100%',
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
    bottom:60,
    left:'20%',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
     backgroundColor: 'white',
    borderColor:'#42207A'
  },
  subContainer:{
   width:'90%',
   height:400,
   top:'10%',
    backgroundColor: 'white',
    borderColor:'#42207A',
    borderWidth:5,
  },
    // input: {
    //   borderRadius:4,
    //   textAlign:'left',
    //   fontWeight:'bold',
    //   backgroundColor:'white',
    //   top:'10%',
    //   height: 50,
    //   width:'90%',
    //   margin: 20,
    //   borderWidth: 1,
    //   borderColor:'#42207A'
    // },
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
    text1: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#42207A',
    },

    
});
