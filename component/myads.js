import React,{useState,useEffect} from 'react';
import { SafeAreaView, Image,View, FlatList, StyleSheet, Text, TextInput,ScrollView, Button,TouchableOpacity} from 'react-native';
import {useNavigation  } from '@react-navigation/native';
import Axios from 'axios';

// import { mdiCloseBox } from '@mdi/js';
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchRepair = () => {
    const [data,setData]=useState([]);
    const [filterData,setfilterData]=useState([]);
    const navigation =  useNavigation();


    useEffect(()=>{
  
  
        Axios.get("http://192.168.1.16:3001/repair/getAdds").then((response)=>{
            console.log(response.data);
            setData(response.data);
  setfilterData(response.data);
  
        }).catch((e)=>{
            console.log(e);
        })
  
    },[])
    const deleteAdd = (id)=>{
      Axios.delete(`http://192.168.1.16:3001/user/deleteAdd/${id}`) .then((response)=>{
        setData(data.filter((item)=>{
  return item.id !=id;
        })
        );
      });
    };

    let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dasaj74ii/upload';
const [selectedImage, setSelectedImage] = useState("");
const [Photo,setPhoto]=useState("");

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });

    let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;
    console.log(base64Img);

    let data = {
      "file": base64Img,
      "upload_preset": "ml_default",
    }

    fetch(CLOUDINARY_URL, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    }).then(async r => {
      let data = await r.json()

      setPhoto(data.url);
    }).catch(err => console.log(err))
  };


  // const searchData=(text)=>{
  //   if(text){
  //     const newData=data.filter((item)=>{
  //       const itemData=item.city? item.city.toUpperCase():''.toUpperCase();
  //       const textData=text.toUpperCase();
  //       return itemData.indexOf(textData)>-1;
  //     });
  //     setfilterData(newData);
  //     setSearch(text);
  //   }
  //   else{
  //     setfilterData(data);
  //     setSearch(text);
  //   }
  // }
  // const [search, setSearch] = useState('');


  
  return (
    <View style={styles.container1}>
      <ScrollView>
      {/* <Text style={{position:'absolute',left:'55%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text> */}

     
{/*      

      <TextInput
        style={styles.input}
        value={search}
        onChangeText={(text)=>searchData(text)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Enter City"
      /> */}
      

    <SafeAreaView style={styles.container}>
   
     
        {/* // data={DATA} */}
        {
        filterData.map((item)=>(
          // onPress={() => navigation.navigate('RepairDetails')}
          // <FlatList keyExtractor={item => item.id}>
           <TouchableOpacity key={item.id} style={styles.item} >
          <Image source={{ uri:'https://res.cloudinary.com/dasaj74ii/image/upload/v1632071362/txkx3hyrg3uxad7zpaao.jpg' }} style={{left:"20%",top:'1%', width: 150, height: 150 }} />
               {/* <View style={{left:"20%"}}> */}
               <Text style={styles.title}>{item.heading}</Text>
                {/* </View> */}
               <Text style={styles.text}>Brand : {item.brand}</Text> 
               <Text style={styles.text}>Condition : {item.condition}</Text> 
               <Text style={styles.text}>Manu.by : {item.country}</Text> 
               <Text style={styles.text}>Unit Price : Rs.{item.price}/=</Text> 
              {/* // renderItem={renderItem}
              // keyExtractor={item => item.id} */}
<Button style={styles.button} onPress={()=>deleteAdd(item.id)}  style={styles.button}title="Delete"
/><Text style={styles.delete}>
Delete</Text>
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
  delete:{
    right:"220%",
    top:-49,
    width:100,
    height:30,
    fontSize:17,
    color:'white'
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
  button:{
    right:"200%",
    bottom:40,
    width:100,
    height:30,
    backgroundColor:'red'
  },
  item: {
   left:5,
    padding:40,
    paddingTop:50,
    top:-120,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor:'#42207A',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    flex:1,
    height: 350,
    width: 320,
    justifyContent: 'center',
    // alignItems: 'center',
     flexDirection: 'column',
  },
  title: {
    fontSize: 25,
    fontWeight:'bold'
    // left:"130%",
    // bottom:"10%"
  },
  text:{
    fontSize:18,
    left:"0.1%",
   

  },
  text1:{
    fontSize:18,
    // right:"5%",
  right:"42%",
    top:"5%"
  },
  text2:{
    fontSize:18,
    top:"10%",
    right:"130%"
  },
  text3:{
    fontSize:18,
    right:"217%",
    top:"15%"
  }
});

export default SearchRepair;