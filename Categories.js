import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getCategory } from './API/common';
import { ItemsList } from './ItemsList';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      title: 'Каталог товаров',
      path: null,
      level: 1,
    };
  }
  fetchItems = async () => {
    const { level, path } = this.state;
    const fetchedCategories = await getCategory({ level, path });
    const { items } = fetchedCategories;
    this.setState({ items });
  };
  componentDidMount() {
    this.fetchItems();
  }
  componentDidUpdate(_, prevState) {
    if (prevState.path !== this.state.path) {
      this.fetchItems();
    }
  }
  handleCategoryPress = item => {
    const { path, name, id, is_leaf } = item;
    const { setCatalogState } = this.props;
    this.setState(state => ({
      title: name,
      path,
      level: state.level + 1,
    }));
    setCatalogState({
      id,
      categoryTitle: name,
      noSubcategory: Boolean(is_leaf),
    });
  };
  render() {
    const { items, title } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>{title}</Text>
        <ItemsList items={items} onItemPress={this.handleCategoryPress} />
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
