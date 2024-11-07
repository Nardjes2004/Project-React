import React from 'react'
import { Product } from '../data/data'

export default function ProductsList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> 
      
    
      {Product.map((item) => (
          <div key={item.id} className="p-4 border rounded"> {/* Add a unique key for each item */}
            <img src={item.img} alt={item.title } className="w-full h-auto mb-2" />
            <h2 className="font-bold">{item.title || "Unnamed Product"}</h2>
            <p>{item.description || "No description available"}</p>
            <p>Stocked: {item.stocked}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}

    
    </div>
  )
}
