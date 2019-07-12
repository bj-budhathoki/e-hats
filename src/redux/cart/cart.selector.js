import { createSelector } from "reselect";

export const selectCart = state => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);
export const selectCartItemCounts = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuntity, cartItem) => accumalatedQuntity + cartItem.quantity,
      0
    )
);
