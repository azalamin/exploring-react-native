import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Country from "./Country";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
  return (
    <View>
      <Text style={styles.header}>Countries: {countries?.length}</Text>
      <ScrollView>
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        fontSize: 40,
        color: 'red'
    }
})