import React, { useEffect, useContext } from 'react';

import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

import './Products.css';

function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading ? <Loading /> :
      <section className="products container">
        {
          products.map((product) => {
            return <ProductCard key={product.id} data={product} />;
          })
        }
      </section>)
  );
}

export default Products;
