import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export function ProfileScreen({ route, navigation }) {
  function handleHomePress() {
    navigation.navigate('Home');
  }

  function handleSettingsPress() {
    navigation.navigate('Settings');
  }

  function handleListPress() {
    navigation.navigate('List');
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Profile </Text>
      <Pressable style={styles.button} onPress={handleHomePress}>
        <Text style={styles.text}>Home Screen</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleSettingsPress}>
        <Text style={styles.text}>Settings Screen </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleListPress}>
        <Text style={styles.text}>List Screen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#d6dcff',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    margin: 15,
    color: '#0e00d6',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    margin: 10,
    marginLeft: 100,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#0e00d6',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
