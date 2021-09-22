import React from 'react';
// import { Text } from 'react-native-paper';
import {Text,View} from 'react-native';
import MapView,{Marker} from 'react-native-maps';

export default function App(){
    const bodyText = "Chat";
   
    return(
      <MapView style={{flex:1,height:'100%',width:'100%'}}  mapType="mutedStandard" initialRegion={{
          latitude:6.931970,
          longitude:79.857750,
          latitudeDelta:0.0922,
          longitudeDelta:0.0421,
          }}>
              <Marker coordinate={{ latitude : 6.931970 , longitude : 79.857750}} />
          </MapView>
    );
}