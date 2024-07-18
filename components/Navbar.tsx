import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <nav className=' gap-6 text-primary font-medium text-lg hidden md:flex'>
    <Link href={'#home'}>Home</Link>
    <Link href={'#technologies'}>Technologie</Link>
    <Link href={'#about'}>About</Link>
    <Link href={'#projects'}>Projects</Link>
    <Link href={'#contact'}>Contact</Link>
   </nav>
  )
}

export default Navbar