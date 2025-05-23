'use client'
import React from 'react'
import Section from '@/components/custome-ui/Section'
import MotionDiv from '@/components/custome-ui/MotionDiv'
import { Technologies } from '@/components/Technologies'
import useLanguageStore from '@/stores/useLanguageStore'
import { technologiesSectionTranslation } from '@/constants/translation'

const TechnologiesSction = () => {
    const {language}=useLanguageStore()
    const translation=technologiesSectionTranslation(language)
  return (
    <Section 
    id='technologies' 
    title={translation.title} 
    description={translation.description}>
        <MotionDiv>
          <Technologies/>
        </MotionDiv>
    </Section>
  )
}

export default TechnologiesSction
