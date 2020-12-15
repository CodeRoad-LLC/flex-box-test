import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.part1}>
     <Image style={styles.img} source={require("./assets/background.jpg")}/>
      </View>
      <View style={styles.part2}>
      </View>
      <View style={styles.part3}>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
  part1: {
    flex: 10,
    width: '100%',
  },
  part2: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fc5c65',
  },
  part3: {
    flex: 1,
    width:'100%',
    backgroundColor: '#4ECDC4',
  },
});
