import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
