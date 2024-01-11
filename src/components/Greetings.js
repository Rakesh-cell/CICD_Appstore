/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Greetings = () => {
  const [name, setname] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 30, borderColor: 'gray', borderWidth: 1}}
        placeholder="Write your name..."
        onChangeText={text => setname(text)}
      />
      <Text style={{marginTop: 10, color: 'black'}}>
        welcome to this CI/CD Appstore,{name}
      </Text>
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 16,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
