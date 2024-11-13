'use client'
import React from 'react'
import Section from '../custome-ui/Section'
import { SocialMediaList } from "@/components/custome-ui/SocialMediaList";
import WordRotate from "@/components/ui/word-rotate";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import {  ArrowRight, Download } from "lucide-react";
import {  motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { Hero } from '../custome-ui/Hero';
import useLanguageStore from '@/stores/useLanguageStore';
import { homeSectionTranslation } from '@/constants/translation';
const HomeScetion = () => {
    const router = useRouter();
    const {language}=useLanguageStore()
    const translation=homeSectionTranslation(language)
  return (
   <Section id='home' title='' description='' >
<AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
          )}
        />
        <div className="grid grid-cols-1 gap-6 items-center justify-center md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ x: 0, opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-y-4 items-center md:items-baseline text-center md:text-left self-center"
          >
            <h1 className="flex flex-col justify-center text-3xl  sm:text-4xl lg:text-5xl gap-x-2 font-bold">
              <span className="text-primary">{translation.title}</span>
              <WordRotate
                className="font-bold text-black dark:text-white capitalize w-full"
                words={translation.words}
              />
            </h1>
            <p className="text-muted-foreground text-sm">
            {translation.description}
            </p>
            <Button
              onClick={() => router.push('/resume')}
              size={'lg'}
              className="text-lg flex items-center gap-2 capitalize text-white"
            >
           {translation.downloadCv}
              <ArrowRight className="text-white"/>
            </Button>
            <SocialMediaList/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ x: 0, opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center order-first md:order-last"
          >
            <Hero/>
          </motion.div>
        </div>
   </Section>
  )
}

export default HomeScetion
