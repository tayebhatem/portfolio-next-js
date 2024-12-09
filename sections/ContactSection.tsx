'use client'
import { contactSectionTranslation } from '@/constants/translation'
import useLanguageStore from '@/stores/useLanguageStore'
import React from 'react'
import Section from '@/components/custome-ui/Section'
import ContactForm from '@/components/ContactForm'
import MotionDiv from '@/components/custome-ui/MotionDiv'
import { Tools } from '@/components/Tools'

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
