import React from 'react';
import { SafeAreaView, Image,View, FlatList, StyleSheet, Text, Pressable} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Tail Lamp',
    address: 'Gampaha',
    price:'Rs.60,000',
    quantity:'3',
    image:require("../assets/images/man.png")
  },
  {
    id: '2',
    title: 'Tail Lamp',
    address: 'Gampaha',
    price:'Rs.60,000',
    quantity:'3',
    image:require("../assets/images/man.png")
  },
  {
    id: '3',
    title: 'Tail Lamp',
    address: 'Gampaha',
    price:'Rs.60,000',
    quantity:'3',
    image:require("../assets/images/man.png")
  },
];

const Item = ({ title , image , address, price,quantity}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{address}</Text>
    <Text style={styles.text}>{price}</Text>
    <Text style={styles.text}>{quantity}</Text>
    <Image style={{width:80,height:50}}>{image}</Image>
  </View>
);

const App = (props) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} address={item.address} price={item.price} quantity={item.quantity}/>  
    
  );
  const { onPress, title = 'Checkout' } = props;
  return (
    <View style={styles.container1}>
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>

      <Image style={{position:'absolute', bottom:'90%',right:'90%', width:"5%",height:'5%'}}
      source={require('../assets/images/back.png')} />
      <Text style={{position:'absolute',left:'5%', bottom:'85%',color:'black',fontSize:25,fontWeight:'bold' }}>
        My Cart
      </Text>
     

    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    <SafeAreaView style={styles.subContainer}>
      <Text style={{fontSize:20,fontWeight:'bold',position:'absolute',left:'3%',top:'20%'}}>Total - Rs. 180,000.00</Text>
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '40%',
    width:'90%'
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer:{
    width:'85%',
    height:'10%',
    bottom:'5%',
    backgroundColor: '#EFDEFF'
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

  },
  button: {
    alignItems: 'center',
    position:'absolute',
    top:'20%',
    left:'70%',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
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

export default App;