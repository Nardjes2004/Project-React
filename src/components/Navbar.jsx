import React from 'react'

export default function Navbar() {
  return (
<header className="sticky top-0 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.4)] py-2">
    <nav className="flex items-center justify-between max-w-screen-lg mx-auto">
        <img 
            className="w-16 transition duration-300 ease-in-out rounded-lg grayscale hover:scale-110 hover:grayscale-0" 
            src="/Logo.png" 
            alt="Logo"
        />
        <ul className="flex gap-10 list-none cursor-pointer">
            <li className="text-lg font-semibold hover:underline ">Home</li>
            <li className="text-lg font-semibold hover:underline ">Checkout</li>
            <li className="text-lg font-semibold hover:underline ">Shop</li>
        </ul>
    </nav>
</header>

  )
}
