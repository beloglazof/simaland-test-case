import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem } from './ListItem';

export function ItemsList({ items, onItemPress }) {
  return (
    <FlatList
      style={styles.list}
      data={items}
      renderItem={({ item }) => <ListItem item={item} onPress={onItemPress} />}
      keyExtractor={item => `${item.id}`}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingLeft: 10,
  },
});
