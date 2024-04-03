import React from 'react';
import propTypes from 'prop-types';

import './ProductDetails.css';

function ProductDetails({ productData }) {

  const { title, thumbnail, price, warranty } = productData;

  return (
    <section className="product-details container">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="imagem do produto"
        className="product-details-image"
      />

      <div className="product-details-info">
        <h2>{title}</h2>
        <h2>{price}</h2>
        <h3>{warranty}</h3>
      </div>
    </section>
  );
}

export default ProductDetails;

ProductDetails.propTypes = {
  data: propTypes.shape({})
}.isRequired;
