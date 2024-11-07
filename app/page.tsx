'use client'
import { Button } from "@/components/ui/button";
import { DivideIcon, Download } from "lucide-react";
import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { skills } from "../constants/data";

import MotionDiv from "@/components/MotionDiv";
import SkillItem from "@/components/SkillItem";
import ContactForm from "@/components/ContactForm";
import { useRouter } from "next/navigation";
import { SocialMediaList } from "@/components/custome-ui/SocialMediaList";
import WordRotate from "@/components/ui/word-rotate";
import { Technologies } from "@/components/custome-ui/Technologies";
import { cn } from "@/lib/utils";
import { Hero } from "@/components/custome-ui/Hero";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import ProjectList from "@/components/ProjectList";
import { Tools } from "@/components/custome-ui/Tools";

export default function Home() {
  const router = useRouter();
  const [view, setView] = useState('all');
  
  return (
    <>
      <section className="space-y-8 my-16" id="home">
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
            <h1 className="flex flex-col justify-center md:flex-row flex-wrap items-center text-3xl lg:text-4xl gap-x-2 font-bold">
              <span className="text-primary">I'm a</span>
              <WordRotate
                className="font-bold text-black dark:text-white capitalize w-full"
                words={["web developer", "mobile developer"]}
              />
            </h1>
            <p className="text-muted-foreground text-sm">
              I am a passionate and dedicated web and mobile developer, creating dynamic and user-friendly digital solutions. My expertise lies in crafting responsive websites and intuitive mobile applications that not only meet user needs but also drive business success.
            </p>
            <Button
              onClick={() => router.push('/assets/cv.pdf')}
              size={'lg'}
              className="text-lg flex items-center gap-2 capitalize text-white"
            >
              Download CV
              <Download className="text-white"/>
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
      </section>

      <section id="technologies" className="space-y-8 my-16">
        <MotionDiv>
          <div className="my-8">
            <h1 className="font-bold text-3xl sm:text-4xl text-secondary-foreground/90 text-center">Technologies</h1>
            <p className="text-muted-foreground text-center">Technologies I've used in my projects</p>
          </div>
        </MotionDiv>

        <MotionDiv>
          <Technologies/>
        </MotionDiv>
      </section>

      <section id="about" className="space-y-8 my-16">
        <MotionDiv>
          <div className="my-8">
            <h1 className="font-bold text-3xl sm:text-4xl text-secondary-foreground/90 text-center">About</h1>
            <p className="text-muted-foreground text-center">Information about my profile</p>
          </div>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-4 px-5">
          <div>
            <MotionDiv>
              <h1 className="font-bold text-2xl text-primary">Education</h1>
              <div className="relative flex gap-x-4 py-2">
                <div className="before:content-[''] before:-left-1.5 before:absolute before:rounded-full before:w-4 before:h-4 before:bg-primary
                               after:content-[''] after:absolute after:-left-0.5 after:top-4 after:w-1.5 after:h-full after:bg-primary">
                </div>
                <div>
                  <h2 className="font-medium text-xl">Bachelor's degree in Computer Science</h2>
                  <h3 className="font-medium">2016-2017</h3>
                  <p className="italic text-muted-foreground">USTHB - Algiers</p>
                  <h3 className="font-medium">2017-2020</h3>
                  <p className="italic text-muted-foreground">Ibn Khaldun - Tiaret</p>
                </div>
              </div>

              <div className="relative flex gap-x-4 py-2">
                <div className="before:content-[''] before:-left-1.5 before:absolute before:rounded-full before:w-4 before:h-4 before:bg-primary">
                </div>
                <div>
                  <h2 className="font-medium text-xl">Master's degree in Software Engineering</h2>
                  <h3 className="font-medium">2020-2022</h3>
                  <p className="italic text-muted-foreground">Ibn Khaldun - Tiaret</p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv>
              <h1 className="font-bold text-2xl text-primary">Experience</h1>
              <div className="relative flex gap-x-4 py-2">
                <div className="before:content-[''] before:-left-1.5 before:absolute before:rounded-full before:w-4 before:h-4 before:bg-primary
                               after:content-[''] after:absolute after:-left-0.5 after:top-4 after:w-1.5 after:h-full after:bg-primary">
                </div>
                <div>
                  <h2 className="font-medium text-xl">Freelancer on Fiverr/Upwork</h2>
                  <h3 className="font-medium">2022-2024</h3>
                  <p className="text-muted-foreground">
                    Experienced freelancer specializing in building responsive web and desktop applications. I also offer professional digital design services to create visually appealing and user-friendly interfaces. Dedicated to delivering high-quality solutions tailored to client needs.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-x-4 py-2">
                <div className="before:content-[''] before:-left-1.5 before:absolute before:rounded-full before:w-4 before:h-4 before:bg-primary">
                </div>
                <div>
                  <h2 className="font-medium text-xl">Computer Science Teacher</h2>
                  <h3 className="font-medium">2023-2024</h3>
                  <p className="text-muted-foreground">
                    Experienced computer science teacher offering courses in Python, web development (HTML, CSS, and JavaScript), and databases. Passionate about helping students grasp complex concepts and develop practical skills. Dedicated to delivering engaging and comprehensive lessons tailored to diverse learning needs.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>

          <div>
            <MotionDiv>
              <h1 className="font-bold text-2xl text-primary">Skills</h1>
            </MotionDiv>
            <div className="space-y-4 mt-2 text-lg">
              {skills.map((skill, index) => (
                <SkillItem skill={skill} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="space-y-8 my-16">
        <MotionDiv>
          <div className="my-8">
            <h1 className="font-bold capitalize text-3xl sm:text-4xl text-secondary-foreground/90 text-center">Projects</h1>
            <p className="text-muted-foreground text-center">Projects I've built recently</p>
          </div>
        </MotionDiv>
        <ProjectList />
      </section>

      <section id="contact" className="space-y-8 my-16">
        <MotionDiv>
          <div className="my-8">
            <h1 className="font-bold text-3xl sm:text-4xl text-secondary-foreground/90 text-center">Contact</h1>
            <p className="text-muted-foreground text-center">Get in touch with me</p>
          </div>
        </MotionDiv>
     
 <div className="grid md:grid-cols-2 items-center">
 <ContactForm/>
 <MotionDiv>
 <Tools/>
 </MotionDiv>
 </div>
      </section>
    </>
  );
}
