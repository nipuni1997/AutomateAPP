import React from 'react';
import { SafeAreaView, Image,View, FlatList, StyleSheet, Text, TextInput} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Tail Lamp',
    address: 'Gampaha',
    price:'Rs.60,000',
    image:require("../assets/images/man.png")
  },
  {
    id: '2',
    title: 'Tail Lamp',
    address: 'Gampaha',
    price:'Rs.60,000',
    image:require("../assets/images/man.png")
  },
  {
    id: '3',
    title: 'Tail Lamp',
    address: 'Gampaha',
    price:'Rs.60,000',
    image:require("../assets/images/man.png")
  },
];

const Item = ({ title , image , address, price}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{address}</Text>
    <Text style={styles.text}>{price}</Text>
    <Image style={{width:80,height:50}}>{image}</Image>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} address={item.address} price={item.price} />  
    
  );
  const [search, setSearch] = React.useState(null);
  return (
    <View style={styles.container1}>
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>

      
      <Image style={{position:'absolute', bottom:'90%',right:'90%', width:"5%",height:'5%'}}
      source={require('../assets/images/menuicon.png')} />

      <TextInput
        style={styles.input}
        onChangeText={(val)=>setSearch(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Search"
      />

    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
    width:'90%',
    margin: 20,
    borderWidth: 1,
    borderColor:'#42207A'
  },
  item: {
    backgroundColor: '#EFDEFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  text:{
    fontSize:20,

  }
});

export default App;