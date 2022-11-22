import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { ListScreen } from '../screens/ListScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ title: "List Screen" }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings Screen" }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile Screen" }}
      />
    </Stack.Navigator>
  );
}



const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'HOME',
            headerTitleStyle: {
              fontSize: 26,
              color: '#4500bd',
            },
            headerStyle: {
              borderBottomColor: '#4500bd',
              borderBottomWidth: 0.5,
            },
           tabBarIcon: (tabInfo) => {
            return (
            <Ionicons name="home" size={22}
            color={tabInfo.focused ? "#4500bd" : "#AAAAAAA"}
          />
        );
      },
          }}
        />

        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            headerTitle: 'PLAYLIST',
            headerTitleStyle: {
              fontSize: 26,
              color: '#00b380',
            },
            headerStyle: {
              borderBottomColor: '#00b380',
              borderBottomWidth: 0.5,
            },
            tabBarIcon: (tabInfo) => {
            return (
            <Ionicons name="musical-notes" size={22}
            color={tabInfo.focused ? "#00b380" : "#AAAAAA"}
          />
        );
      },
          }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: 'SETTINGS',
            headerTitleStyle: {
              fontSize: 26,
              color: '#db5f00',
            },
            headerStyle: {
              borderBottomColor: '#db5f00',
              borderBottomWidth: 0.5,
            },
            tabBarIcon: (tabInfo) => {
            return (
            <Ionicons name="settings" size={22}
            color={tabInfo.focused ? "#db5f00" : "#AAAAAA"}
          />
        );
      },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitle: 'PROFILE',
            headerTitleStyle: {
              fontSize: 26,
              color: '#0e00d6',
            },
            headerStyle: {
              borderBottomColor: '#0e00d6',
              borderBottomWidth: 0.5,
            },
            tabBarIcon: (tabInfo) => {
            return (
            <Ionicons
            name="person" size={22}
            color={tabInfo.focused ? "#0e00d6" : "#AAAAAA"}
          />
        );
      },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
