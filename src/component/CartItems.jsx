import React from 'react'

export default function CartItems({ite}) {
  // console.log(ite);
  return (
    <div className='py-2'>
      <div className='bg-slate-500 flex justify-between p-2'>
        <h2 className='text-l font-medium text-gray-200'>{ite.name}</h2>
        <p className='text-l font-medium text-gray-200'>{ite.qty} x {ite.price}</p>
        
    </div>
    </div>
  )
}
