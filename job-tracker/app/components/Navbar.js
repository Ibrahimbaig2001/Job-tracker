'use client'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='h-15 bg-purple-700 flex justify-between px-2 items-center text-white font-bold'>
      <span className='text-lg'>Job-Search</span>
      <ul className='flex gap-3'>
        <li><a href="/" className='hover:bg-purple-800'>Home</a></li>
        <li><a href="/about" className='hover:bg-purple-800'>About</a></li>
        <li><a href="/sign In" className='hover:bg-purple-800'>Sign In</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
