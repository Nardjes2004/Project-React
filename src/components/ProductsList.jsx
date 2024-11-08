import React from 'react'
import { Product } from '../data/data'
import { Link } from 'react-router-dom'

export default function ProductsList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> 
      
    
      {Product.map((item) => (
          <div className="shadow-xl rounded-tl-2xl rounded-tr-2xl"> {/* Add a unique key for each item */}
             <img  className="w-full transition-transform bg-gray-200 rounded-tl-2xl rounded-tr-2xl hover:scale-110" src={item.img} alt={item.title } />
             <div className='p-3'>
                <h2 className="text-lg font-semibold line-clamp-1">{item.title}</h2>
                <div className='flex justify-between my-2'>
                  <h4 className='text-lg text-semibold '>{item.price}<span className='text-sm'>$</span></h4>
                  <h4 className='text-sm bg-gring-gray-200 py-0.5 px-3 rounded-full'> {item.stocked  ? "Instock" :"Sold Out"}</h4>
                </div>
              <div>
              <button className="mt-4 btn"><Link to='/shop/:id'>Show details</Link></button>
              <button className="mt-4 btn"><Link to='/chechout/:ids'>Add to cart</Link></button>
              </div>
             </div>
          </div>
        ))}

    
    </div>
  )
}
