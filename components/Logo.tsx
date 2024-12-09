import React from 'react'
import { cn } from "@/lib/utils"
import { Kanit } from "next/font/google";
import { FaCode } from 'react-icons/fa';
import Link from 'next/link';
const kanit = Kanit({ subsets:['latin'],weight:['700'] });
const Logo = () => {
  return (
    <Link href={'/'} className='flex flex-row items-center gap-x-2 outline-none border-none '>
    <FaCode className='size-8'/>
    <h1
    className={cn(
     "font-extrabold tracking-tight text-2xl sm:text-3xl text-secondary-foreground/90",
    kanit.className
   )}>
     Dev<span className="text-primary">Tech</span></h1>
    </Link>
  )
}

export default Logo