'use client'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='h-15 bg-purple-700 flex justify-between px-2 items-center text-white font-bold'>
      <span className='text-lg'>Job-Search</span>
      <ul className='flex gap-3'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/sign In">Sign In</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
