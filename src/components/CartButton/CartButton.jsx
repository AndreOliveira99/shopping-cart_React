import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItems, isCartVisible, setCartVisible } = useContext(AppContext);

  return (
    <button 
      type="button" 
      className="cart__button"
      onClick={ () => setCartVisible(!isCartVisible)}
    >
      <FaShoppingCart />
      {/* linha abaixo equivale a: cartItems.length > 0 ? <span>...</span> : '' */}
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
    </button>
  );
}

export default CartButton;
