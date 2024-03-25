import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';

import './Cart.css';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {

  const { cartItems, isCartVisible } = useContext(AppContext);

  // const calculateTotalPrice = () => {
  //   let totalPrice = 0;
  //   cartItems.map((cartItem) => {
  //     totalPrice = totalPrice + cartItem.price;
  //   });
  //   return totalPrice;
  // };

  const totalPrice = cartItems.reduce((acumulator, item) => acumulator + item.price, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
      </div>

      <div className="cart-resume">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
    </section>
  );
}

export default Cart;
