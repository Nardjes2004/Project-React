import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className='my-16'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
