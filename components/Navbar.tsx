'use client'
import { headerTranslation } from '@/constants/translation'
import useLanguageStore from '@/stores/useLanguageStore'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {language}=useLanguageStore()
  const translation=headerTranslation(language)
  return (
   <nav className=' gap-6  font-medium text-lg hidden md:flex'>
    <Link href={'#home'}>{translation.home}</Link>
    <Link href={'#technologies'}>{translation.technologies}</Link>
    <Link href={'#about'}>{translation.about}</Link>
    <Link href={'#projects'}>{translation.projects}</Link>
    <Link href={'#contact'}>{translation.contact}</Link>
   </nav>
  )
}

export default Navbar