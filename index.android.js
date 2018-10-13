import React from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity } from 'react-native';

const styles = {
  button: {
    backgroundColor: '#538530',
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  spaceContents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const App = () => {
  const { spaceContents, button, text } = styles;

  return (
    <View style={spaceContents}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity style={button}>
        <Text style={text}>New Phrase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('phrasesOfTheDay', () => App);
