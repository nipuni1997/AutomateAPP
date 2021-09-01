import React from 'react';
import { SafeAreaView, Image,View, FlatList, StyleSheet, Text} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Tail Lamp',
    address: 'Gampaha',
    price:'Rs.60,000',
    image:require("./assets/images/man.png")
  },
  {
    id: '2',
    title: 'Tail Lamp',
    address: 'Gampaha',
    price:'Rs.60,000',
    image:require("./assets/images/man.png")
  },
  {
    id: '3',
    title: 'Tail Lamp',
    address: 'Gampaha',
    price:'Rs.60,000',
    image:require("./assets/images/man.png")
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

  return (
    <View style={styles.container1}>
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>

      
      <Image style={{position:'absolute', bottom:'90%',right:'90%', width:"5%",height:'5%'}}
      source={require('./assets/images/menuicon.png')} />
      <Text style={{position:'absolute',left:'5%', bottom:'85%',color:'black',fontSize:25,fontWeight:'bold' }}>
        My Ads
      </Text>
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
    marginTop: '30%',
    width:'90%'
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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