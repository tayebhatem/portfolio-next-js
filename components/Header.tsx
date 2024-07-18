import React from 'react'
import { ModeToggle } from "@/components/ModeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  
  return (
    <header className="w-full border-b border-b-muted fixed top-0 z-40 bg-card">
    <div className="flex   py-8 px-4 justify-between items-center lg:max-w-5xl  mx-auto">
  <Logo/>
  <Navbar/>

  <div className="flex gap-x-4 items-center">
  <ModeToggle/>

   <Sheet >
<SheetTrigger>
<GiHamburgerMenu className="block md:hidden"/>
</SheetTrigger>
<SheetContent side={'left'}>
<SheetHeader>
  <SheetTitle>
 <Logo/>
  </SheetTitle>
  <SheetDescription>
   
    <nav className='flex gap-6 flex-col w-full justify-center items-center mt-4 text-primary font-medium text-lg '>
    <SheetClose asChild>
    <Link href={'#home'} >Home</Link>
      </SheetClose>   
      <SheetClose asChild>
      <Link href={'#technologies'}>Technologie</Link>
      </SheetClose>
      <SheetClose asChild>
      <Link href={'#about'}>About</Link>
      </SheetClose>
      <SheetClose asChild>
      <Link href={'#projects'}>Projects</Link>
      </SheetClose>
      <SheetClose asChild>
      <Link href={'#contact'}>Contact</Link>
      </SheetClose>


</nav>
  
   
  </SheetDescription>
</SheetHeader>
</SheetContent>
</Sheet>
  </div>
 

    </div>
 
</header>
  )
}

export default Header