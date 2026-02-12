'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className='h-15 bg-purple-700 flex justify-between px-2 items-center text-white font-bold'>
      <span className='text-lg'>Job-Search</span>
      <ul className='flex gap-3'>
        <li><Link href="/" className='hover:bg-purple-800'>Home</Link></li>
        <li><Link href="/about" className='hover:bg-purple-800'>About</Link></li>
        <li><Link href="/signin" className='hover:bg-purple-800'>Sign In</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
