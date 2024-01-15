import React, { useContext, useEffect } from 'react';
import CartItems from './CartItems'; // Assuming you have a CartItems component
import Total from './Total'; // Assuming you have a Total component
import { nanoid } from 'nanoid';
import { ProductContext } from './UserContext';

export default function Cart() {
  const cartContext = useContext(ProductContext);

  // Calculate the total directly inside the component
  const tot = cartContext.data.reduce((total, item) => total + item.qty * item.price, 0);
  useEffect(()=>{
    const updatecart = cartContext.data.filter((ele)=>{
      return ele.qty > 0
    })
    // console.log(updatecart);
    cartContext.setData(updatecart)
  },[tot])

  const gridS = {
    gridTemplateRows: '0.5fr 3fr 0.5fr',
    gap: '1rem',
  };

  return (
    <div className='w-72 border-4 grid p-3' style={gridS}>
      <h1 className='text-2xl font-semibold text-center pb-3'>Cart</h1>
      <div>
        {cartContext.data.length > 0 ? (
          cartContext.data.map((item) => (item.qty > 0 ? <CartItems ite={item} key={nanoid()} /> : null))
        ) : (
          <h1 className='text-2xl text-center font-bold'>No Items added</h1>
        )}
      </div>
      <div className='place-self-stretch bg-slate-500 flex justify-between p-3 items-center'>
        <Total total={tot} />
      </div>
    </div>
  );
}
