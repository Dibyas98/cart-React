import React, { useState } from 'react';
import ProductCont from './ProductCont';
import Cart from './Cart';
import { ProductContext } from './UserContext';

export default function Screen() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleCart = (arg) => {
    const filteredData1 = cartItems.filter((item) => item.id !== arg.id);
    setCartItems([...filteredData1, arg]);
  };
  

  // console.log(cartItems);

  return (
    <div className='flex gap-5 w-1/2 m-auto mt-14'>
      <ProductContext.Provider value={{ data, setData }}>
        <ProductCont cartlist={handleCart} />
        <Cart cartItems={cartItems} />
      </ProductContext.Provider>
    </div>
  );
}
