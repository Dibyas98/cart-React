import React, { useState } from 'react';

export default function ItemCont({ items, id, cartlist }) {

  const [cartItems, setCartItems] = useState([]);
  
  


  const [qnt, setQnt] = useState({
    id: items.id,
    name: items.name,
    qty: 0,
    price: items.price
  });


  const handelQnt = (arg) => {
    if (arg === 'DECREASE') {
      if (qnt.qty > 0) {
        setQnt((prev) => {
          const updatedQnt = { ...prev, qty: prev.qty - 1 };
          // console.log(updatedQnt);
          cartlist(updatedQnt);
          return updatedQnt;
        });
      }
    } else {
      setQnt((prev) => {
        const updatedQnt = { ...prev, qty: prev.qty + 1 };
        // console.log(updatedQnt);
        cartlist(updatedQnt);
        return updatedQnt;
      });
    }
  };
  // console.log(cartItems);

  return (
    <div className='bg-slate-500 flex justify-between p-4'>
      <h2 className='text-xl font-medium text-gray-200'>{items.name}</h2>
      <p className='text-xl font-medium text-gray-200'>{items.price}</p>
      <div className='w-28 items-center border flex justify-between rounded-xl px-5 text-xl font-medium text-gray-200'>
        <button onClick={() => handelQnt('DECREASE')}>-</button>
        <span>{qnt.qty}</span>
        <button onClick={() => handelQnt('INCREASE')}>+</button>
      </div>
    </div>
  );
}
