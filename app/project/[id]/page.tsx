'use client'

import { projects } from '@/constants/data';
import useLanguageStore from '@/stores/useLanguageStore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { RxExternalLink } from "react-icons/rx";

const ProjectPage = ({params}:{params:{id:string}}) => {
   const {id} =params
   const project=projects.find(item=>item.slug===id)
  const {language}=useLanguageStore()
    
  return (
    <div className='grid md:grid-cols-2 my-16 justify-between  gap-8 '>
      <div className='h-96 shadow-md rounded-md border overflow-hidden flex'>
      <img src={project?.thumbnail} className='object-cover'/>
      </div>
       <div className='space-y-4'>
        <h1 className='text-3xl capitalize font-semibold'>
          {
          language.id==='en'?project?.name.en:project?.name.fr
          }
          </h1>
        <p className='text-muted-foreground'>
        {
          language.id==='en'?project?.description.en:project?.description.fr
          }
        </p>
        <div className='flex flex-row gap-2 flex-wrap'>
        {
          project?.tools.map((item,index)=>(
            <div className='bg-black dark:bg-muted text-white dark:text-white text-nowrap text-sm rounded-full px-3 py-1 font-medium capitalize' key={index}>
            {item}
            </div>
          ))
         }
        
        </div>

     <div className=''>
     {
        project?.type==='web' ?  <Link href={project?.url || ''} className='flex flex-row items-center gap-x-2 text-muted-foreground'>
        <RxExternalLink size={20}/>
          Live Preview
        </Link>:
      <Link href={project?.url || ''} className='bg-black dark:bg-card text-white max-w-52   self-start  p-2 rounded-md flex flex-row items-center gap-x-3  font-medium'>
     <IoLogoGooglePlaystore size={32}/>
  <div>
    <p className='uppercase'>get it on</p>
    <p className='text-xl capitalize'>  Play store</p>
  </div>
      </Link>
       }
     </div>
       </div>
        </div>
  )
}

export default ProjectPage