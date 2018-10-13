import React from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const styles = {
  button: {
    backgroundColor: '#538530',
    marginTop: 20,
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

const generatePhrase = () => {
  var value = Math.random();

  value = Math.floor(value * 5);

  var phrases = Array();
  phrases[0] = 'Ela pode ser o que ela quiser, mas EleNão.';
  phrases[1] = '"Lembre-se de onde você veio e saiba onde você quer chegar."';
  phrases[2] = '"Domine o conhecimento para não ser ignorante."';
  phrases[3] = '"Se você colhe o que gostaria, é pq não plantou o que deveria."';
  phrases[4] = '"Se ficar parado resolvesse algo, poderíamos ser estátuas."';

  Alert.alert(phrases[value]);
};

const App = () => {
  const { spaceContents, button, text } = styles;

  return (
    <View style={spaceContents}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity 
        style={button}
        onPress={generatePhrase}
      >
        <Text style={text}>Phrase in Portuguese</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('phrasesOfTheDay', () => App);