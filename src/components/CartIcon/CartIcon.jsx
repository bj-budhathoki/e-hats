import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemCounts } from "../../redux/cart/cart.selector";
const CartIcon = ({ toggleCartHidden, itemsCounts }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemsCounts}</span>
  </div>
);
const mapStateToProps = state => ({
  itemsCounts: selectCartItemCounts(state)
});
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
