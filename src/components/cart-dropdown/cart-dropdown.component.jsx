import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) =>
          !cartItems.length ? (
            <h3 className='empty-message'>Your cart is empty</h3>
          ) : (
            <CartItem key={cartItem.id} item={cartItem} />
          ),
        )}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
