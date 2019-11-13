import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className='option' to='/signin'>
            Sing in
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
