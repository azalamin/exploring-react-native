import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setSearched(data);
      });
  }, []);

  const handleSearch = (text) => {
    const filtered = countries.filter((country) =>
      country.name.common.includes(text)
    );
    setSearched(filtered); 
  };

  return (
    <View>
      <Text style={styles.header}>Countries: {searched?.length}</Text>
      <TextInput onChangeText={handleSearch} style={styles.input}></TextInput>
      <ScrollView>
        {searched.map((country, index) => (
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
    color: "red",
  },
  input: {
    margin: 10,
    height: 40,
    color: "green",
    padding: 10,
    borderWidth: 1,
  },
});
