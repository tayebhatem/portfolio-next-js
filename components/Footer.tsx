import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FaSquareUpwork } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-y-10 lg:max-w-5xl  mx-auto border-t py-10 justify-center items-center'>
       <ul className='flex flex-row gap-x-4 '>
        <li className='capitalize text-primary hover:underline'><Link href={'#home'}>home</Link></li>
        <li className='capitalize text-primary hover:underline'><Link href={'#technologies'}>technologies</Link></li>
        <li className='capitalize text-primary hover:underline'><Link href={'#about'}>about</Link></li>
        <li className='capitalize text-primary hover:underline'><Link href={'#projects'}>projects</Link></li>
        <li className='capitalize text-primary hover:underline'><Link href={'#contact'}>contact</Link></li>
       </ul>

       <ul className='flex flex-row gap-x-4'>
     <li >
     <Link href='https://github.com/tayebhatem'>
    <FaGithub className="w-6 h-6 text-muted-foreground"/>
    </Link>
     </li>
     <li>
     <Link href={'https://www.linkedin.com/in/tayeb-hatem-3a2100156/'}>
 <FaLinkedin className="w-6 h-6 text-muted-foreground"/>
 </Link>
     </li>
    <li>
    <Link href={'https://www.upwork.com/freelancers/~019526742efa60c32e'}>
 <FaSquareUpwork className="w-6 h-6 text-muted-foreground"/>
 </Link>
    </li>

 <li>
    <Link href={'https://t.me/tayebhatem'}>
    <FaTelegram className="w-6 h-6 text-muted-foreground"/>
    </Link>
 </li>
       </ul>

       <p className='text-muted-foreground'>
       © 2024 DzComerce All rights reserverd
       </p>
    </footer>
  )
}

export default Footer