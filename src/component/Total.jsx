import React from 'react'

export default function Total({total}) {
  return (
    <>
    <h1 className='font-medium text-2xl text-gray-200'>
        Total:
      </h1>
      <p className='font-medium text-2xl text-gray-200'>{total}</p>
    </>
  )
}
