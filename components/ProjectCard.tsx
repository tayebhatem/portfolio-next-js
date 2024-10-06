'use client'
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa';
import MotionDiv from './MotionDiv';
import { MagicCard } from './ui/magic-card';
import { useTheme } from 'next-themes';
export interface Project{
    slug:string,
    name:string;
    description:string;
    thumnail:string;
    github:string;
    url:string;
    tools:string[];
    type:'web'|'mobile';
}
const ProjectCard = ({project}:{project:Project}) => {
  const { theme } = useTheme();
  return (
   <MotionDiv>
     <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl  "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      
      >
  
  <Link href={`/project/${project.slug}`}  className=' flex pt-6 justify-center  px-4  h-52 bg-gradient-to-r from-indigo-500 via-purple-500   to-pink-500  overflow-hidden'>
  <img src={project.thumnail} className="object-cover  transition-all hover:scale-110 rounded-t-md"/>
  </Link>
  
 <div className='p-3 space-y-2'>
 <h1 className="text-lg font-semibold capitalize">
      {
        project.name
      }
    </h1>
    <p className='text-muted-foreground text-sm  h-16   py-2 overflow-hidden'>
  {project.description}
</p>
<div className='flex flex-row gap-2 flex-wrap py-2'>
         {
          project?.tools.map((item,index)=>(
            <div className='bg-black dark:bg-muted text-white dark:text-white text-nowrap text-sm rounded-full px-3 py-1 font-medium capitalize' key={index}>
            {item}
            </div>
          ))
         }
        
        </div>
    <div className="flex flex-row gap-x-4 justify-end py-2">
 {
  project.type==='web' &&  <Link href={project.url}>
  <FaLink className="w-5 h-5 text-primary"/>
  </Link>
 }
   <Link href={project.github}>
   <FaGithub className="w-5 h-5 text-primary"/>
   </Link>
    </div>
 </div>
  
  
      </MagicCard>
    
   </MotionDiv>
  )
}

export default ProjectCard