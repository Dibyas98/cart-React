import React, { useEffect, useState } from 'react';
import CartItems from './CartItems';
import Total from './Total';
import { nanoid } from 'nanoid';

export default function Cart({ cartItems }) {
  const final = cartItems.reduce((total, item) => total + (item.qty*item.price), 0);
  const [tot, setTot] = useState(final);
  useEffect(()=>{
    setTot(final)
  },[final])

  const gridS = {
    gridTemplateRows: '0.5fr 3fr 0.5fr',
    gap: '1rem',
  };

  return (
    <div className='w-72 border-4 grid p-3' style={gridS}>
      <h1 className='text-2xl font-semibold text-center pb-3'>Cart</h1>
      <div>
        {cartItems.length>0? cartItems.map((item) => (
          item.qty>0?<CartItems ite={item} key={nanoid()} />:null
        )):<h1 className='text-2xl text-center font-bold'>No Items added</h1>}
      </div>
      <div className='place-self-stretch bg-slate-500 flex justify-between p-3 items-center'>
        <Total total={tot} />
      </div>
    </div>
  );
}
