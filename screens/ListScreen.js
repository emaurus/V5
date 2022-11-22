import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';

export function ListScreen({ route, navigation }) {
  function handleSettingsPress() {
    navigation.navigate('Settings');
  }
  function handleHomePress() {
    navigation.navigate('Home');
  }

  function handleProfilePress() {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Playlist </Text>
      <Pressable style={styles.button} onPress={handleHomePress}>
        <Text style={styles.text}>Home Screen </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleSettingsPress}>
        <Text style={styles.text}>Settings Screen</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleProfilePress}>
        <Text style={styles.text}>Profile Screen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#caece3',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    margin: 15,
    color: '#00b380',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    margin: 10,
    marginLeft: 100,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#00b380',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
