import React, { Component } from 'react'

import collections from '../../components/directory/directory.data';

export class Shop extends Component {
  constructor(){
    super();

    this.state = {
      collections,
    }
  }

  render() {
    return (
      <div>
        Shop Page
      </div>
    )
  }
}

export default Shop
