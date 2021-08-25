import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable ,Image, TextInput , TouchableOpacity} from 'react-native';

export default function App(props) {
  const [heading, setHeading] = React.useState(null);
  const [brand, setBrand] = React.useState(null);
  const [year, setYear] = React.useState(null);
  const [genuine, setGenuine] = React.useState(null);
  const [condition,setCondition] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const [img, setImage] = React.useState(null);
  const { onPress, title = 'Submit' } = props;
  return (
    <View style={styles.container}>
    
      <Text style={{position:'absolute',left:'63%', bottom:'90%',color:'#42207A',fontSize:25,fontWeight:'bold' }}>
        AUTOMATE
      </Text>
      
        <Image style={{position:'absolute', bottom:'90%',right:'90%', width:"5%",height:'5%'}}
      source={require('./assets/images/menuicon.png')} />
      <View style={styles.subContainer}>
        <Text style={{position:'absolute',left:'5%', bottom:'90%',color:'black',fontSize:25,fontWeight:'bold' }}>
        Add Details of Advertisement
      </Text>
      
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setHeading(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Heading"
      />
       <TextInput
        style={styles.input}
        onChangeText={(val)=>setBrand(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Brand"
      />
     
     <TextInput
        style={styles.input}
        onChangeText={(val)=>setYear(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Year of Manufacture"
      />
    <TextInput
        style={styles.input}
        onChangeText={(val)=>setGenuine(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Is Genuine"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setCondition(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Condition"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setDescription(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Description"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val)=>setImage(val)}
        //value={number}
        //keyboardType="numeric"
        placeholder="Upload an Image"
      />
     
     
     <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>



    </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer:{
   width:'90%',
   height:'70%',
   top:'5%',
    backgroundColor: '#EFDEFF'
  },
    input: {
      borderRadius:4,
      textAlign:'left',
      fontWeight:'bold',
      backgroundColor:'white',
      top:'10%',
      height: 50,
      width:'90%',
      margin: 20,
      borderWidth: 1,
      borderColor:'#42207A'
    },
    
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    button: {
      alignItems: 'center',
      position:'absolute',
      bottom:'5%',
      left:'30%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
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
