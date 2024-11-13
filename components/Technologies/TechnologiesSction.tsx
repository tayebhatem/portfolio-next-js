'use client'
import React from 'react'
import Section from '../custome-ui/Section'
import MotionDiv from '../MotionDiv'
import { Technologies } from '../custome-ui/Technologies'
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
