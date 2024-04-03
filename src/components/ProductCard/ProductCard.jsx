import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';
import formatCurrency from '../../utils/formatCurrency';
import { cloneDeep } from 'lodash';
import { Link } from 'react-router-dom';

import './ProductCard.css';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

  const { title, thumbnail, price, id } = data;

  const { cartItems, setCartItems, setLoading } = useContext(AppContext);

  const handleAddCart = () => {
    data.quantity = 1;
    let newItem = true;

    let updatedCartItems = cloneDeep(cartItems);

    updatedCartItems.forEach((item) => {
      if (item.id == id) {
        item.quantity += 1;
        newItem = false;
      }
    });

    newItem ? setCartItems([...cartItems, data]) : setCartItems(updatedCartItems);
  };

  return (
    <section className="product-card">

      <Link 
        to={`/product/${id}`} 
        className="product-link" 
        onClick={()=>{setLoading(true);}} 
      >
        <img 
          src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
          alt="product" 
          className="card__image" 
        />

        <div className="card__infos">
          <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
          <h2 className="card__title">{title}</h2>
        </div>

      </Link>

      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <FaCartPlus />
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
