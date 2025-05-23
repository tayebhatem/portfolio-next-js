'use client'
import { projectsSectionTranslation } from '@/constants/translation'
import useLanguageStore from '@/stores/useLanguageStore'
import React from 'react'
import Section from '@/components/custome-ui/Section'
import ProjectList from '@/components/ProjectList'

const ProjectsSection = () => {
    const {language}=useLanguageStore()
    const translation=projectsSectionTranslation(language)
  return (
    <Section 
    title={translation.title}
    description={translation.description}
    id='projects'>
        <ProjectList/>
    </Section>
  )
}

export default ProjectsSection
