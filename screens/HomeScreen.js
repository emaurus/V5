import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export function HomeScreen({ route, navigation }) {
  function handleSettingsPress() {
    navigation.navigate('Settings');
  }

  function handleListPress() {
    navigation.navigate('List');
  }

  function handleProfilePress() {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Home </Text>
      <Pressable style={styles.button} onPress={handleSettingsPress}>
        <Text style={styles.text}>Settings Screen</Text>
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
    backgroundColor: '#d6c8ee',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    margin: 15,
    color: '#3a009e',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    margin: 10,
    marginLeft: 100,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#4500bd',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
