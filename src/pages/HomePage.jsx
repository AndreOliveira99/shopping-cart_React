import React  from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Provider from '../context/Provider';
import Cart from '../components/Cart/Cart';


function Home() {
  return (
    <Provider>
      <Header />
      <Outlet />
      <Cart />
    </Provider>
  );
}

export default Home;
