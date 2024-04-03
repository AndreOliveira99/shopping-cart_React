const fetchProductDetails = async (productId) => {

  const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const data = await response.json();
  
  return data;
};

export default fetchProductDetails;
