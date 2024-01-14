import React, { useContext, useState } from 'react'
import { nanoid } from 'nanoid'
import ItemCont from './ItemCont'
import { ProductContext } from './UserContext'

const Products = [
    {id: nanoid(), name: 'Product-1', price:100},
    {id: nanoid(), name: 'Product-2', price:200},
    {id: nanoid(), name: 'Product-3', price:300},
    ] 
    

export default function ProductCont({cartlist}) {
   
  return (
    <div className='border-4 w-2/3 py-5 p-3'>
        <h1 className='text-2xl font-semibold text-center pb-3'>Product</h1>
        <div className='flex flex-col gap-5'>
            {
                Products.map(items =>{
                    // const id= ;
                    return <ItemCont key={items.id} items={items}  cartlist={cartlist}/>
                })
            }
        </div>
    </div>
  )
}
