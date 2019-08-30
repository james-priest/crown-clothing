import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

// Selector - gets a slice of state and computes a new value.
// Whenever any reducer updates, it composes and returns a new state object.
// This triggers a call to mapStateToProps EVERY single time which
// causes a re-render of all components relying on mapStateToProps!

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumulator, item) => accumulator + item.quantity,
//     0
//   )
// });

// For this reason we use memoized selectors
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden)
// });

export default connect(
  mapStateToProps,
  { toggleCartHidden } // this is shorthand for mapDispatchToProps()
)(CartIcon);
