import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <>
    <div className='flex flex-col justify-between min-h-screen'>
      
      <Navbar />
      <main className='flex-grow mx-16 my-16'>
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  )
}
