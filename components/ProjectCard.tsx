'use client'
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa';
import MotionDiv from './custome-ui/MotionDiv';
import { MagicCard } from './ui/magic-card';
import { useTheme } from 'next-themes';
import { ProjectType } from '@/types';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import useLanguageStore from '@/stores/useLanguageStore';
import { ArrowRight } from 'lucide-react';
const ProjectCard = ({project}:{project:ProjectType}) => {
  const { theme } = useTheme();
  const {language}=useLanguageStore()
  return (
   <MotionDiv>
     <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl   "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
  <Link href={`/project/${project.slug}`}  className=' flex pt-6 justify-center  px-4  h-52 bg-gradient-to-r from-indigo-500 via-purple-500   to-pink-500  overflow-hidden'>
  <img src={project.thumbnail} className="object-cover  transition-all hover:scale-110 rounded-t-md"/>
  </Link>
 <div className='p-3 space-y-2'>
 <h1 className="text-lg font-semibold capitalize line-clamp-1">
      {
       language.id==='en'? project.name.en: project.name.fr
      }
    </h1>
    <p className='text-muted-foreground text-sm line-clamp-3'>
  {
  language.id==='en'?project.description.en:project.description.fr
  }
</p>
<div className='h-20'>
<div className='flex flex-row gap-2 flex-wrap py-2  items-start'>
         {
          project.tools.map((item,index)=>(
            <div className='bg-black dark:bg-muted text-white dark:text-white text-nowrap text-sm rounded-full px-3 py-1 font-medium capitalize' key={index}>
            {item}
            </div>
          ))
         }
        
        </div>
</div>
    <div className='flex flex-row justify-between items-center'>
    <div className="flex flex-row gap-x-4 justify-end py-2">
    <Link href={project.url}>
  {project.type==='web'?<FaLink className="w-5 h-5 text-muted-foreground"/>:<IoLogoGooglePlaystore className="w-5 h-5 text-muted-foreground" />}
  </Link>
   <Link href={project.github}>
   <FaGithub className="w-5 h-5 text-muted-foreground"/>
   </Link>
    </div>

    <Link href={`/project/${project.slug}`} className='flex flex-row items-center gap-x-2 text-sm text-primary dark:text-white font-medium'>
    {language.id==='en'?'Read more':'Lire plus'}
    <ArrowRight className='size-4'/>
    </Link>
    </div>
 </div>
  
  
      </MagicCard>
    
   </MotionDiv>
  )
}

export default ProjectCard