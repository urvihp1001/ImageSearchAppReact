import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red', // Set the border color here
    borderRadius: 5,
    padding: 10,
    display:'flex',
    flexDirection:'column'
  },
});

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = () => {
    onSubmit(term);
  };

  const handleChange = (text) => {
    setTerm(text);
  };

  return (
    <View style={styles.container}>
     <TextInput style={styles.container} placeholder="Enter Search Term" value={term} onChangeText={handleChange}/>
     <br/>
     <Button onSubmit={handleFormSubmit} title="SUBMIT"/>
    </View>
  );
}

export default SearchBar;
