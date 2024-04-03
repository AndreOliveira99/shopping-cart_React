import React, { useEffect, useContext }  from 'react';
import { useParams } from 'react-router-dom';

import fetchProductDetails from '../api/fetchProductDetails';
import AppContext from '../context/AppContext';
import Loading from '../components/Loading/Loading';
import ProductDetails from '../components/ProductDetails/ProductDetails';

function ProductPage() {

  const { loading, setLoading, productDetails, setProductDetails } = useContext(AppContext);
  const { productId } = useParams();

  useEffect(() => {
    fetchProductDetails(productId).then((response) => {
      setProductDetails(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading ? <Loading /> :
      <ProductDetails productData={productDetails}/>
    )
  );
}

export default ProductPage;
