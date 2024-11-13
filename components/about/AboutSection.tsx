import React from 'react'
import Section from '../custome-ui/Section'
import MotionDiv from '../MotionDiv'
import { skills, technicalSkills } from '@/constants/data'
import SkillItem from '../SkillItem'
import useLanguageStore from '@/stores/useLanguageStore'
import { aboutSectionTranslation } from '@/constants/translation'

const AboutSection = () => {
    const {language}=useLanguageStore()
    const translation=aboutSectionTranslation(language)
  return (
   <Section  
   id='about'
   title={translation.title} 
   description={translation.description}>
      <div className="grid md:grid-cols-2 gap-4 px-5">
        
          <div className='space-y-2'>
          <MotionDiv>
          <h1 className="font-bold text-2xl text-primary">{translation.educationTitle}</h1>
            </MotionDiv>
         
            <MotionDiv>
             <div className="overflow-y-clip">
           
            {
                translation.education.map((item,index)=>(
                    <div className="relative flex gap-x-4 py-2" key={index}>
                    <div className="before:content-[''] before:-left-1.5 before:top-3.5 before:absolute before:rounded-full before:w-4 before:h-4 before:bg-primary
                                   after:content-[''] after:absolute  after:top-4 after:w-1.5 after:h-full after:bg-primary">
                    </div>
                    <div>
                      <h2 className="font-medium text-xl">{item.degree}</h2>
                      <h3 className="font-medium">{item.years}</h3>
                      <p className="italic text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>
                ))
            }

          

             </div>
            </MotionDiv>
            <MotionDiv>
            <h1 className="font-bold text-2xl text-primary">{translation.experienceTitle}</h1>
            </MotionDiv>
          
            <MotionDiv>
            
            <div className="overflow-y-clip">
             {
                translation.experience.map((item)=>(
                    <div className="relative flex gap-x-4 py-2">
                    <div className="before:content-[''] before:-left-1.5 before:top-3.5 before:absolute before:rounded-full before:w-4 before:h-4 before:bg-primary
                                     after:content-[''] after:absolute  after:top-4 after:w-1.5 after:h-full after:bg-primary">
                      </div>
                      <div>
                        <h2 className="font-medium text-xl">{item.title}</h2>
                        <h3 className="font-medium">{item.years}</h3>
                        <p className="text-muted-foreground">
                         {item.description}
                        </p>
                      </div>
                    </div>
                ))
             }

             
                    
            </div>
            </MotionDiv>
          </div>

          <div className='space-y-2'>
          <MotionDiv>
              <h1 className="font-bold text-2xl text-primary">{translation.skillsTitle}</h1>
            </MotionDiv>
            {technicalSkills.map((skill, index) => (
                <SkillItem skill={skill} key={index} />
              ))}
          </div>
        </div>
   </Section>
  )
}

export default AboutSection
