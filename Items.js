import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getItem } from './API/common';
import { ItemsList } from './ItemsList';

export class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      title: props.title,
    };
  }
  fetchItems = async () => {
    const { categoryId } = this.props;
    const fetchedItems = await getItem({ category_id: categoryId });
    console.log(fetchedItems);
    const { items } = fetchedItems;
    this.setState({ items });
  };
  async componentDidMount() {
    await this.fetchItems();
  }
  render() {
    const { items, title } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>{title}</Text>
        <ItemsList items={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  mainTitle: {
    fontSize: 34,
    textAlign: 'center',
    margin: 20,
  },
});
