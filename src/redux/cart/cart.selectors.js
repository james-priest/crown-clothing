import { createSelector } from 'reselect';

// Two types of selectors: input & output selectors

// input selector: takes whole state and returns just a slice of it
const selectCart = state => state.cart;

// output selector: uses createSelector() & memoizes the selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// output selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);
