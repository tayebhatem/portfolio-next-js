'use client'

import { projects } from '@/constants/data';
import { ProjectType } from '@/types';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { RxExternalLink } from "react-icons/rx";

const ProjectPage = ({params}:{params:{id:string}}) => {
   const {id} =params
   const project=projects.find(item=>item.slug===id)
  
    
  return (
    <div className='grid md:grid-cols-2 my-16 justify-between  gap-8 '>
      <div className='h-96 shadow-md rounded-md border overflow-hidden flex'>
      <img src={project?.thumbnail} className='object-cover'/>
      </div>
       <div className='space-y-4'>
        <h1 className='text-3xl capitalize font-semibold'>{project?.name}</h1>
        <p className='text-muted-foreground'>
        {project?.description}
        </p>
        <div className='flex flex-row gap-2 flex-wrap'>
         {
          project?.tools.map((item,index)=>(
            <div className='bg-muted text-nowrap text-sm rounded-full px-3 py-1 font-medium capitalize' key={index}>
            {item}
            </div>
          ))
         }
        
        </div>

       {
        project?.type==='web' &&  <Link href={project?.website || ''} className='flex flex-row items-center gap-x-2 text-muted-foreground'>
        <RxExternalLink size={20}/>
          Live Preview
        </Link>
       }
       </div>
        </div>
  )
}

export default ProjectPage