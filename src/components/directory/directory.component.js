import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import sections from './directory.data';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
