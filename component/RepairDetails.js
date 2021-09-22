import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Axios from 'axios';

export default function RepairHome() {
  const navigation = useNavigation();
  const [data,setData]=useState([]);


  useEffect(()=>{


      Axios.get("http://192.168.1.16:3001/repair/getRepair/").then((response)=>{
          console.log(response.data);
          setData(response.data);


      }).catch((e)=>{
          console.log(e);
      })

  },[])

 
  return (
    <View style={styles.container}>
    <Image
    style={{position:'absolute', bottom:'50%', width:415,height:410}}
    source={require('../assets/images/sparehome.jpeg')}
    //resizeMode="contain"
    />
   <Text style={{position:'absolute',left:'2%',top:'52%',color:'#42207A',fontSize:25,fontWeight:'bold'}}>
    Store Information
    </Text>
    
    {
      data.map((item)=>(

    <TouchableOpacity style={styles.subContainer} key={item.id}>


    <Text style={styles.text}>Shop Name        : {item.name}</Text>
    <Text style={styles.text}>Address              : {item.address}</Text>
    <Text style={styles.text}>City                      : {item.city}</Text>
    <Text style={styles.text}>Province             : {item.province}</Text>
    <Text style={styles.text}>Phone no.           : {item.tel}</Text>
    {/* <Text style={styles.text}>E-mail       :Dilanka@gmail.com</Text> */}
    <Text style={styles.text}>Description        : {item.description}</Text>
    {/* <Text style={styles.text}>Mechanics         :</Text> */}




    </TouchableOpacity>
      ))
    }
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
  // width:'90%',
  // height:'65%',
  // top:'5%',
  // //paddingLeft:5,
  // backgroundColor: 'white',
  // borderColor:'#42207A',
  // borderWidth:5
  left:1,
  padding:20,
  paddingTop:1,
  top:200,
  marginVertical: 8,
  marginHorizontal: 16,
  borderColor:'#42207A',
  shadowColor: 'rgba(0,0,0, .4)', // IOS
  shadowOffset: { height: 1, width: 1 }, // IOS
  shadowOpacity: 1, // IOS
  shadowRadius: 1, //IOS
  backgroundColor: '#fff',
  elevation: 2, // Android
  height: 260,
  width: 400,
  justifyContent: 'center',
  // alignItems: 'center',
   flexDirection: 'column',
 },
 subContainer1:{
  flexDirection: "row",
  height: 140,
  padding: 20,
 
 },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    //position:'absolute',
    //left:'5%'

  },
  text1:{
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    
  }
});
