import React, { useState } from 'react';
import ProductCont from './ProductCont';
import Cart from './Cart';
import { ProductContext } from './UserContext';

export default function Screen() {
  const [data, setData] = useState([]);

  return (
    <div className='flex gap-5 w-1/2 m-auto mt-14'>
      <ProductContext.Provider value={{ data, setData }}>
        <ProductCont />
        <Cart  />
      </ProductContext.Provider>
    </div>
  );
}
