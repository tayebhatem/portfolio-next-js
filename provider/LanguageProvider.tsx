
'use client'
import { languages } from '@/constants/data'
import useLanguageStore from '@/stores/useLanguageStore'
import React, { ReactNode, useEffect } from 'react'
const LanguageProvider = ({children}:{children:ReactNode}) => {
    
    const {language,changeLanguage}=useLanguageStore()
 useEffect(() => {
    const lang=localStorage.getItem('lang')
    if(lang){
        const selectedLanguage=languages.find(item=>item.id===lang) || language
      changeLanguage(selectedLanguage)

    }else{
        localStorage.setItem('lang',language.id)
    }
 }, [])
 
  return (
   <>
   {children}
   </>
  )
}

export default LanguageProvider
