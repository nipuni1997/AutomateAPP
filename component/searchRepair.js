import React,{useState,useEffect} from 'react';
import { SafeAreaView, Image,View, FlatList, StyleSheet, Text, TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {useNavigation  } from '@react-navigation/native';
import Axios from 'axios';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchRepair = () => {
    const [data,setData]=useState([]);
    const [filterData,setfilterData]=useState([]);
    const navigation =  useNavigation();

    useEffect(()=>{
  
  
        Axios.get("http://192.168.1.16:3001/repair/getAll").then((response)=>{
            console.log(response.data);
            setData(response.data);
  setfilterData(response.data);
  
        }).catch((e)=>{
            console.log(e);
        })
  
    },[])
    const getRepairId = (id)=>{
      Axios.post(`http://192.168.1.16:3001/user/getRepairId/${id}`) .then((response)=>{
        setData(data.filter((item)=>{
  return item.id !=id;
        })
        );
      });
    };

  const searchData=(text)=>{
    if(text){
      const newData=data.filter((item)=>{
        const itemData=item.city? item.city.toUpperCase():''.toUpperCase();
        const textData=text.toUpperCase();
        return itemData.indexOf(textData)>-1;
      });
      setfilterData(newData);
      setSearch(text);
    }
    else{
      setfilterData(data);
      setSearch(text);
    }
  }
  const [search, setSearch] = useState('');


  
  return (
    <View style={styles.container1}>
      <ScrollView>
      <Text style={{position:'absolute',left:'55%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>

     
     

      <TextInput
        style={styles.input}
        value={search}
        onChangeText={(text)=>searchData(text)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Enter City"
      />
      

    <SafeAreaView style={styles.container}>
   
     
        {/* // data={DATA} */}
        {
        filterData.map((item)=>(
          // <FlatList keyExtractor={item => item.id}>
           <TouchableOpacity key={item.id} style={styles.item} onPress={() =>navigation.navigate('RepairDetails')}>
          
               <Text style={styles.title}>{item.name}</Text> 
               <Text style={styles.text}>{item.address}</Text> 
               <Text style={styles.text}>{item.city}</Text> 
               <Text style={styles.text}>{item.province}</Text> 
               <Text style={styles.text}>{item.tel}</Text> 
              {/* // renderItem={renderItem}
              // keyExtractor={item => item.id} */}


          </TouchableOpacity>
          // </FlatList>
      ))

    }
       
        
       
       
    
    </SafeAreaView>
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '45%',
    width:'90%'
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius:4,
    textAlign:'left',
    paddingLeft:10,
    fontWeight:'bold',
    fontSize:20,
    backgroundColor:'white',
    position:'absolute',
    top:'10%',
    height: 50,
    width:'100%',
    margin: 10,
    borderWidth: 1,
    left:-10,
    borderColor:'#42207A'
  },
  item: {
   left:5,
    padding:30,
    paddingTop:50,
    top:20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor:'#42207A',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 200,
    width: 320,
    justifyContent: 'center',
    // alignItems: 'center',
     flexDirection: 'column',
  },
  title: {
    fontSize: 32,
  },
  text:{
    fontSize:20,

  }
});

export default SearchRepair;