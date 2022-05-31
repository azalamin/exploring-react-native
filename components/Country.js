import React from 'react';
import { Image, Text, View } from "react-native";

export default function Country({country}) {
  return (
    <View>
      <Text style={{fontSize: 30}}>{country.name?.common}</Text>
      <Image source={{uri: country.flags.png}} style={{width: 200, height: 150}}>

      </Image>
    </View>
  )
}