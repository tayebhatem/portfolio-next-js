import React from 'react'
import MotionDiv from './custome-ui/MotionDiv'
import { SkillType } from '@/types'
import useLanguageStore from '@/stores/useLanguageStore'

const SkillItem = ({skill}:{skill:SkillType}) => {
  const {language}=useLanguageStore()
  return (
   <MotionDiv>
     <div className="flex flex-row gap-x-4 items-start " >
          <div className="mt-2 border-8 border-r-transparent border-t-transparent border-b-transparent border-l-primary"></div>

          <div className='space-y-1'>
            <h3 className='text-xl font-medium'>{language.id==='en'?skill.title.en:skill.title.fr}</h3>
          <p  className="text-base">
            
            {skill.skills}
            </p>
          </div>
        </div>
   </MotionDiv>
  )
}

export default SkillItem