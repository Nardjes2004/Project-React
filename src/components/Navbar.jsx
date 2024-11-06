import React from 'react'

export default function Navbar() {
  return (
    <header className='py-4 border-b border-b-black'>
      <nav className='flex justify-between items-center max-w-screen-lg mx-auto'>
        <img className='w-16' src='/Logo.png' alt=''/>
        <ul className='flex gap-10 '>
            <li className='text-lg font-semibold hover:underline hover:cursor-pointer'>Home</li>
            <li className='text-lg font-semibold hover:underline hover:cursor-pointer'>Checkout</li>
            <li className='text-lg font-semibold hover:underline hover:cursor-pointer'>Shop</li>
        </ul>


      </nav>
    </header>
  )
}
