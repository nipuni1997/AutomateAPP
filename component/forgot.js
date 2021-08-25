import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Pressable ,Image, TextInput } from 'react-native';

export default function App(props) {
  const [text, onChangeText] = React.useState(null);
  const { onPress, title = 'Submit' } = props;
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Image
      style={{position:'absolute', bottom:'40%',left:'3%', width:373,height:350}}
      source={require('./assets/images/forget-1.png')}
      //resizeMode="contain"
      />
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text> 
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        //keyboardType="numeric"
        placeholder="E-MAIL"
      />
     
      
      <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      </Pressable>

      <Text style={{color:'black',position:'absolute',bottom:'9%',left:'37%',fontWeight:'bold',fontSize:15}}>Back to</Text>
      <Text style={{color:'#42207A',position:'absolute',bottom:'9%',left:'53%',fontWeight:'bold',fontSize:15}}>Login</Text>

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
  },
    input: {
      textAlign:'center',
      fontWeight:'bold',
      top:150,
      height: 50,
      width:275,
      margin: 10,
      borderWidth: 3,
      borderColor:'#42207A'
    },
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:'16%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#42207A',
    },
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});
