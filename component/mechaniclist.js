import React,{useState,useEffect} from 'react';
import { SafeAreaView,Button, Image,View, FlatList, StyleSheet, Text, Pressable,ScrollView} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

import Axios from 'axios';
import { useNavigation } from '@react-navigation/core';

// const Item = ({ title , image , address, price}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//     <Text style={styles.text}>{address}</Text>
//     <Text style={styles.text}>{price}</Text>
//     <Image style={{width:80,height:50}}>{image}</Image>
//   </View>
// );

const MechanicList = (props) => {

  const { onPress, title = 'Add Mechanics' } = props;
  const [data,setData]=useState([]);
  const navigation=useNavigation();

  useEffect(()=>{


      Axios.get("http://192.168.1.16:3001/repair/getMechanic").then((response)=>{
          console.log(response.data);
          setData(response.data);


      }).catch((e)=>{
          console.log(e);
      })

  },[])

  const deleteMechanic = (id)=>{
    Axios.delete(`http://192.168.1.16:3001/repair/deleteMechanic/${id}`) .then((response)=>{
      setData(data.filter((item)=>{
return item.id !=id;
      })
      );
    });
  };
  return (
    <View style={styles.container1}>
    

      


     

    <SafeAreaView style={styles.container}>
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
      <ScrollView>
        {
      data.map((item)=>(
          //
           <View key={item.id} style={styles.item}> 
               <Text style={styles.title}>{item.name}</Text> 
               <Text style={styles.text}>{item.tel}</Text> 
               {/* <Text style={styles.text}>{item.image}</Text>  */}
               <Pressable style={styles.button1}  onPress={()=>deleteMechanic(item.id)}><Text style={styles.textButton1}>Delete</Text></Pressable>

               </View>
      ))
}
      </ScrollView>
    </SafeAreaView>

    <Pressable style={styles.button}  onPress={() => navigation.navigate('Mechanics')}>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '30%',
    width:'90%'
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight:'bold'
  },
  text:{
    fontSize:19,

  },
  button: {
    alignItems: 'center',
    position:'absolute',
    top:'5%',
    left:'57%',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#42207A',
  },
  button1: {
    alignItems: 'center',
    position:'absolute',
    top:'74%',
    left:'80%',
    width:'30%',
    height:35,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  textButton: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textButton1: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default MechanicList;