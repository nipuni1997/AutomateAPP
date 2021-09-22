import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, Button } from 'react-native';
import {useNavigation  } from '@react-navigation/native';
export default function CustomerLanding() {
  //const [number, onChangeNumber] = React.useState(null);
  //const { onPress, title = 'Submit' } = props;
  const navigation =  useNavigation();
  return (
    <View style={styles.container}>
      <Image
      style={{position:'absolute', bottom:'50%', width:390,height:350}}
      source={require('../assets/images/about.jpeg')}
      //resizeMode="contain"
      />
      {/* <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>  */}
     
      <Text style={{position:'absolute',left:'4%',top:'50%',color:'#42207A',fontSize:25,fontWeight:'bold'}}>
      What is Automate?
      </Text>
      <Text style={{top:'25%'}}>   Automate is a platform where you can buy and sell
                            spare parts. If you are a seller, you will only have
                            to spend a few minutes to post an ad on Automate.
                            You can sign up for a account and post ads easily
                            every time. If you are an Owner of a spare part
                            shop, you can easily set up your shop within
                            Automate. Just sign your shop up and have your own
                            website space for the shop.</Text>

        <Text style={{top:'25%'}}>   Automate has the widest selection of spare part
                            items all over Sri Lanka, which makes it easy to
                            find exactly what you are looking for. Whatever the
                            part you're looking for, you will find the best deal
                            on Automate.(on our website)</Text>
                            <Text style={{top:'25%',left:'0.1%' ,fontWeight:'bold'}}>  And in mobile app we mainly focus to search a repair station near to you.
                            And also you can search spare parts from our app and can get their contacts. we hope to develop 
                            online payment system to mobile app too.
                            </Text>
   
    
    
  
    
        
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding:5
  },
   
  button: {
    backgroundColor: '#42207A',
    borderColor: '#42207A',
    borderWidth: 5,
    position:'absolute',
    bottom:'60%'  

 }
    
});
