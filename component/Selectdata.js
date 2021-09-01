import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
}from 'react-native';


export default function Selectdata() {
    const [data,setData]=useState([]);

    useEffect(()=>{


        axios.get("http://192.168.8.103:3001/getData").then((response)=>{
            console.log(response.data);
            setData(response.data);


        }).catch((e)=>{
            console.log(e);
        })

    },[])

   

    return (
        <View>
         {
               data.map((item)=>(
                <View key={item.id}>
                    <Text>{item.email}</Text>
                </View>
            ))
             
         }
        </View>
    )
}
