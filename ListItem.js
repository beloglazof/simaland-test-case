import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
export function ListItem({ item, onPress }) {
  if (!onPress) {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.name}</Text>
      </View>
    );
  }
  return (
    <TouchableHighlight onPress={() => onPress(item)} underlayColor="grey">
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    height: 30,
    borderBottomWidth: 0.5,
  },
  itemTitle: {
    fontSize: 20,
  },
});
