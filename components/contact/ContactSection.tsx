'use client'
import { contactSectionTranslation } from '@/constants/translation'
import useLanguageStore from '@/stores/useLanguageStore'
import React from 'react'
import Section from '../custome-ui/Section'
import ContactForm from '../ContactForm'
import MotionDiv from '../MotionDiv'
import { Tools } from '../custome-ui/Tools'

const ContactSection = () => {
    const {language}=useLanguageStore()
    const translation=contactSectionTranslation(language)
  return (
   <Section id='contact' title={translation.title} description={translation.description}>
 <div className="grid md:grid-cols-2 items-center">
 <ContactForm/>
 <MotionDiv>
 <Tools/>
 </MotionDiv>
 </div>
   </Section>
  )
}

export default ContactSection
