'use client'
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import useLanguageStore from '@/stores/useLanguageStore'
import { languages } from '@/constants/data'
import { Check } from 'lucide-react'

const LanguageDropdown = () => {
 const {language,changeLanguage}=useLanguageStore()

  return (
    <div>
 <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
        <img alt='lang' className='w-10 h-10'  src={`../assets/${language.id}.png`}/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
       
        <DropdownMenuGroup>
      {
        languages.map((item)=>(
            <DropdownMenuItem 
            onClick={()=>changeLanguage(item)}
            key={item.id} 
            className='gap-2 font-medium cursor-pointer justify-between'>
          <div className='flex flex-row items-center gap-x-2'>
          <img alt='lang' className='w-6 h-6' src={`../assets/${item.id}.png`}/>
          <span>{item.name}</span>
          </div>
            {
                item.id===language.id && <Check/>
            }
          </DropdownMenuItem>
        ))
      }
        
        </DropdownMenuGroup>
       
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default LanguageDropdown
