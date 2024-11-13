'use client'
import { headerTranslation, homeSectionTranslation } from '@/constants/translation'
import useLanguageStore from '@/stores/useLanguageStore'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareUpwork } from 'react-icons/fa6'

const Footer = () => {
  const {language}=useLanguageStore()
  const translation=headerTranslation(language)
  return (
    <footer className='flex flex-col gap-y-10 lg:max-w-5xl  mx-auto border-t py-10 justify-center items-center'>
       <ul className='flex flex-col justify-center items-center xs:flex-row gap-4 '>
        <li className='capitalize text-secondary-foreground font-medium  hover:underline'><Link href={'#home'}>
        {translation.home}
        </Link></li>
        <li className='capitalize text-secondary-foreground font-medium hover:underline'><Link href={'#technologies'}>
        {translation.technologies}
        </Link></li>
        <li className='capitalize text-secondary-foreground font-medium hover:underline'><Link href={'#about'}>
        {translation.about}
        </Link></li>
        <li className='capitalize text-secondary-foreground font-medium hover:underline'><Link href={'#projects'}>
        {translation.projects}
        </Link></li>
        <li className='capitalize text-secondary-foreground font-medium hover:underline'><Link href={'#contact'}>
        {translation.contact}
        </Link></li>
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


       </ul>

       <p className='text-muted-foreground'>
       {
        language.id==='en'?"© 2024 tayebhatem All rights reserverd":"© 2024 tayebhatem Tous droits réservés"
       }
       </p>
    </footer>
  )
}

export default Footer