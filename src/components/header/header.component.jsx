import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/" >
        <Logo className="logo"></Logo>
      </Link>
    </div>
  )
}

export default Header
