'use client'
import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/constants/data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutDashboard } from 'lucide-react'
import { FaDesktop, FaMobile } from 'react-icons/fa'
import { FaMobileScreen } from 'react-icons/fa6'
import MotionDiv from './MotionDiv'
import useLanguageStore from '@/stores/useLanguageStore'
const ProjectList = () => {
  const [projectsData, setProjectsData] = useState(projects)
  const {language}=useLanguageStore()
   const filter=(category:'all' | 'web'| 'mobile')=>{
        if(category==='all'){
         setProjectsData(projects)
        }else{
          setProjectsData(projects.filter(item=>item.type===category))
        }
   }
   
  return (
 <div className='space-y-6'>
  <MotionDiv>
  <div className='w-full flex justify-center'>
     <Tabs defaultValue="all" >
  <TabsList>
  <TabsTrigger 
  className='flex flex-row gap-x-3'
  value="all" 
  onClick={()=>filter('all')}>
    <LayoutDashboard className='' size={20}/>
    {language.id==='en'?"All":"Tout"}
    </TabsTrigger>

    <TabsTrigger 
    value="web" 
     className='flex flex-row gap-x-3'
    onClick={()=>filter('web')}>
      <FaDesktop size={20}/>
      Web
      </TabsTrigger>
    <TabsTrigger 
    value="mobile"
     className='flex flex-row gap-x-3'
     onClick={()=>filter('mobile')}>
      <FaMobileScreen size={20}/>
      Mobile
      </TabsTrigger>
  </TabsList>
 
</Tabs>
   </div>
  </MotionDiv>

     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 px-8  ">
   {
  projectsData.map((item)=>(
   <ProjectCard project={item} key={item.slug}/>
  ))
  }
  </div>
 </div>
  )
}

export default ProjectList
