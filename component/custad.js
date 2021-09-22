import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput , TouchableWithoutFeedback, KeyboardAvoidingView,Keyboard} from 'react-native';
import Axios from 'axios';
export default function App(props) {
  const [heading, setHeading] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [genuine, setGenuine] = useState('');
  const [condition,setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImage] = useState('');
  const { onPress, title = 'Submit' } = props;

  const addAdd = ()=>{
    Axios.post('http://192.168.1.16:3001/user/addAdd',{
     
      heading:heading,
      brand:brand,
     year:year,
     country:genuine,
     condition:condition,
     description:description,
    price:img,
    
  
   }).then((response)=>{
     console.log(response);
     navigation.navigate('Login')
      
     }
     // console.log(response.data[0].userrole);
     
   );
 };

  return (
    <View style={styles.container}>
{/*     
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text> */}
      
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}   >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
      <View style={styles.inner}>
        <Text style={styles.header}>
        Add Details of Advertisement
      </Text>
      
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setHeading(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Heading"
      />
       <TextInput
        style={styles.input}
        onChangeText={(val)=>setBrand(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Brand"
      />
     
     <TextInput
        style={styles.input}
        onChangeText={(val)=>setYear(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Year of Manufacture"
      />
    <TextInput
        style={styles.input}
        onChangeText={(val)=>setGenuine(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Country"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setCondition(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Condition"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setDescription(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Description"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setImage(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Price"
      />
     
     
     <Pressable style={styles.button} onPress={addAdd}>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>



    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  header:{
    marginBottom:48,
    fontSize:22,
    color:'#42207A',
    fontWeight:'bold',
    top:-30,
    left:-10
    // {position:'absolute',left:'130%',  marginBottom:48,color:'#42207A',fontSize:25, }
    // {position:'absolute',left:'5%', bottom:'90%',color:'black',fontSize:25,fontWeight:'bold' }
      },
  subContainer:{
   width:'100%',
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
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:'5%',
      left:'125%',
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
