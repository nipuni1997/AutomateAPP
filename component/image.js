import React, { useState, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View, Pressable ,Image, TextInput ,Button,Linking} from 'react-native';
import PayHere from '@payhere/payhere-mobilesdk-reactnative';

export default function Photo(props) {
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

  return (
    <View>
      <Text> Look at our pretty picture! </Text>
      <Button  title="Upload" onPress={openImagePickerAsync}></Button>
      <Image source={{ uri:selectedImage }} style={{ width: 150, height: 150 }} />
      <Button  onPress={() => Linking.openURL('https://sandbox.payhere.lk/pay/oc4c0b582')} method="get" title="Pay"style={{width:100,height:50}} ></Button>

</View>
  );
}