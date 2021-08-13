import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput } from 'react-native';

export default function App(props) {
  //const [number, onChangeNumber] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const { onPress, title = 'Login' } = props;
  return (
    <View style={styles.container}>
      <Image
      style={{position:'absolute', bottom:'50%',left:35, width:"100%",height:275}}
      source={require('./assets/images/image1.png')}
      //resizeMode="contain"
      />
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text> 
      
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setEmail(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="DESCRIPTION"
      />
   
      
      <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>

     

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
      top:100,
      height: 50,
      width:275,
      margin: 20,
      borderWidth: 3,
      borderColor:'#42207A'
    },
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:'15%',
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
