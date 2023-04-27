import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>violet</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Orange</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Grey</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  card: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8

  },
  cardOne: {
    backgroundColor: '#8e44ad'
  },
  cardTwo: {
    backgroundColor: '#e67e22'
  },
  cardThree: {
    backgroundColor: '#2c3e50'
  }
});
