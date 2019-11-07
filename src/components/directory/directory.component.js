import React from 'react'

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import sections from './directory.data';


class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections
    }
  }

  render() {
    const {sections} = this.state;
    return (
      <div className="directory-menu">
        {
          sections.map(({title, imageUrl, id, size}) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)
        }
      </div>
    )
  }
}

export default Directory;
