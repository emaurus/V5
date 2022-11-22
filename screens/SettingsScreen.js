import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export function SettingsScreen({ route, navigation }) {
  function handleHomePress() {
    navigation.navigate('Home');
  }
  function handleListPress() {
    navigation.navigate('List');
  }

  function handleProfilePress() {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Settings </Text>
      <Pressable style={styles.button} onPress={handleHomePress}>
        <Text style={styles.text}>Home Screen</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleListPress}>
        <Text style={styles.text}>Playlist Screen </Text>
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
    backgroundColor: '#ffd9bd',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    margin: 15,
    color: '#db5f00',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    margin: 10,
    marginLeft: 100,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#ff8b33',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
