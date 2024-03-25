import React, { useState, useContext } from 'react';
import { IoSearch } from 'react-icons/io5';
import fetchProducts from '../../api/fetchProducts';

import './SearchBar.css';
import AppContext from '../../context/AppContext';

function SearchBar() {
  // [valor, função que atualiza o valor] = useState(valor default)
  const [searchValue, setSearchValue] = useState('');

  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="search__button">
        <IoSearch />
      </button>
    </form>
  );
}

export default SearchBar;
