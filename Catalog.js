import React, { Component } from 'react';
import { Categories } from './Categories';
import { Items } from './Items';

export class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryTitle: '',
      noSubcategory: false,
      id: null,
    };
  }
  setCatalogState = value => this.setState(value);
  render() {
    const { noSubcategory, categoryTitle, id } = this.state;
    if (noSubcategory) {
      return <Items categoryId={id} title={categoryTitle} />;
    }
    return <Categories setCatalogState={this.setCatalogState} />;
  }
}
