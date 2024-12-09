'use client'
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
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import LanguageDropdown from '@/components/custome-ui/LanguageDropdown';
import useLanguageStore from '@/stores/useLanguageStore';
import { headerTranslation } from '@/constants/translation';

const Header = () => {
  const {language}=useLanguageStore()
  const translation=headerTranslation(language)
  return (
    <header className="w-full border-b border-b-muted fixed top-0 z-50 bg-card">
    <div className="flex   py-6 justify-between items-center max-w-screen-lg mx-auto  ">
  <Logo/>
  <Navbar/>

  <div className="flex flex-row gap-x-4">
    <LanguageDropdown/>
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
   
    <nav className='flex gap-6 flex-col w-full justify-center items-center mt-4  font-medium text-lg '>
    <SheetClose asChild>
    <Link href={'#home'} >
    {translation.home}
    </Link>
      </SheetClose>   
      <SheetClose asChild>
      <Link href={'#technologies'}>
      {translation.technologies}
      </Link>
      </SheetClose>
      <SheetClose asChild>
      <Link href={'#about'}>
      {translation.about}
      </Link>
      </SheetClose>
      <SheetClose asChild>
      <Link href={'#projects'}>
      {translation.projects}
      </Link>
      </SheetClose>
      <SheetClose asChild>
      <Link href={'#contact'}>
      {translation.contact}
      </Link>
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