import Link from 'next/link'
import React from 'react'



export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-center space-x-3 '>
      <Link href="/" className='hover:underline hover:text-blue-300'> Home </Link>
     

      <Link href="/contact" className='hover:underline hover:text-blue-300'>Contact</Link>

      <Link href="/curriculum" className='hover:underline hover:text-blue-300'>Curriculum </Link>

      <Link href="/feestructure"  className='hover:underline hover:text-blue-300'>Fee structure</Link>
      </nav>

    </div>

  )
}













