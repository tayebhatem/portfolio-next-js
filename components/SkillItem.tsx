import React from 'react'
import MotionDiv from './MotionDiv'

const SkillItem = ({skill}:{skill:string}) => {
  return (
   <MotionDiv>
     <div className="flex flex-row gap-x-4 items-center" >
          <div className="border-8 border-r-transparent border-t-transparent border-b-transparent border-l-primary"></div>

            <p  className="text-sm w-[95%]">
            
            {skill}
            </p>
        </div>
   </MotionDiv>
  )
}

export default SkillItem