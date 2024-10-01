'use client'
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa';
import MotionDiv from './MotionDiv';
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
  return (
   <MotionDiv>
     <div className="space-y-6 flex flex-col justify-center  " >
     <Link href={`/project/${project.slug}`} className="w-full h-80 flex justify-center items-center overflow-hidden border rounded-xl shadow-md">
     <img src={project.thumnail} className="object-cover hover:scale-[150%] transition-all"/>
      </Link>
   <div>
  <div className="flex flex-row justify-between">
  <h1 className="text-xl font-semibold capitalize">
      
      {
        project.name
      }
    </h1>
  <div className="flex flex-row gap-x-4">
  <Link href={project.url}>
   <FaLink className="w-6 h-6 text-primary"/>
   </Link>
   <Link href={project.github}>
   <FaGithub className="w-6 h-6 text-primary"/>
   </Link>
    </div>
  </div>
   </div>
    </div>
   </MotionDiv>
  )
}

export default ProjectCard