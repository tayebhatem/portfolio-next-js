'use client'
import { Button } from "@/components/ui/button";
import { DivideIcon, Download } from "lucide-react";
import { FaGithub,FaLink,FaLinkedin,FaTelegram } from "react-icons/fa";
import {Variants, motion} from "framer-motion"
import { BiSolidRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { images, projects, skills, types } from "../constants/data";
import ProjectCard, { Project } from "@/components/ProjectCard";
import MotionDiv from "@/components/MotionDiv";
import SkillItem from "@/components/SkillItem";
import ContactForm from "@/components/ContactForm";
import { useRouter } from "next/navigation";
import { SocialMediaList } from "@/components/custome-ui/SocialMediaList";
import WordRotate from "@/components/ui/word-rotate";
import { Technologies } from "@/components/custome-ui/Technologies";
import { Tools } from "@/components/custome-ui/Tools";
import { cn } from "@/lib/utils";
import { Hero } from "@/components/custome-ui/Hero";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
export default function Home() {
  const router=useRouter()
  const [view, setView] = useState('all')
  const [projectsData, setprojectsData] = useState<Project[]>(projects)
 
  const showCategory=(category:string)=>{
 if(category==='all'){
   setprojectsData(projects)
 }else{
  setprojectsData(projects.filter(item=>item.type===category)) 
 }  
setView(category)
  }
 
  
  
  return (
   <>
  <section
      className="space-y-8 my-16"
    id="home"
    >
    <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
        )}
      />
      <div className="grid grid-cols-1 gap-6 items-center justify-center  md:grid-cols-2 ">
     
<motion.div 
   initial={{opacity:0,x:-100}} animate={{ x: 0,opacity:1 } } whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}
   
     className="flex flex-col gap-y-4  items-center md:items-baseline text-center md:text-left  self-center">
    <h1 className="flex flex-col justify-center md:flex-row flex-wrap items-center text-3xl lg:text-4xl  gap-x-2  font-bold">
      <h1 className="text-primary">I&apos;m a</h1>

      <WordRotate
      className="font-bold text-black dark:text-white capitalize w-full"
      words={["web developer", "mobile developer"]}
    />
      
    </h1>

    <p className="text-muted-foreground text-sm">
    I am a passionate and dedicated web and mobile developer creating dynamic and user-friendly digital solutions. My expertise lies in crafting responsive websites and intuitive mobile applications that not only meet the needs of users but also drive business success.
    </p>

    <Button 
    onClick={()=>router.push('/assets/cv.pdf')}
    size={'lg'}  
    className="text-lg flex items-center gap-2 capitalize text-white ">
      Download CV
      <Download className="text-white"/>
    </Button>

  <SocialMediaList/>

   </motion.div>

   <motion.div
   initial={{opacity:0,x:100}} animate={{ x: 0,opacity:1 } } whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
    className="flex justify-center order-first md:order-last">

  <Hero/>

   </motion.div>
      </div>
   
  
    </section>


    <section
    id="technologies"
    className="space-y-8 my-16"
     >
  <MotionDiv>
  <div className="my-8">
   <h1 className="font-bold text-3xl sm:text-4xl text-secondary-foreground/90  text-center">Technologes</h1>
    <p className="text-muted-foreground text-center">Technologes i&apos;ve been use for my projects</p>
   </div>
  </MotionDiv>

   

  <MotionDiv>
 <Technologies/>
  </MotionDiv>

   
    </section>

    <section
    className="space-y-8 my-16"
   id="about"
    
    >
  <MotionDiv>
  <div className="my-8">
   <h1 className="font-bold text-3xl sm:text-4xl text-secondary-foreground/90  text-center">About</h1>
    <p className="text-muted-foreground text-center">Informations about my profile</p>
   </div>
  </MotionDiv>
   
   <div  className="grid md:grid-cols-2 gap-4 px-5">

 
 
   <div className="">

  
    <MotionDiv>
    <h1 className="font-bold text-2xl text-primary">Education</h1>
    <div className="relative flex  gap-x-4 py-2">
   <div className=" before:content-[''] before:-left-1.5 before:absolute before:rounded-full   before:w-4 before:h-4 before:bg-primary
   after:content-['']  after:absolute after:-left-0.5 after:top-4    after:w-1.5 after:h-full after:bg-primary
   ">

   </div>
   <div>
      <h2 className="font-medium text-xl ">bachalor degree in computer scinece</h2>
      <h3 className="font-medium">2016-2017</h3>
      <p className="italic text-muted-foreground">USTHB - Alger  </p>
      <h3 className="font-medium">2017-2020</h3>
      <p className="italic text-muted-foreground">Iben khaldun - Tiaret  </p>
    </div>

    </div>

    <div className="relative flex  gap-x-4 py-2">
   <div className=" before:content-[''] before:-left-1.5 before:absolute before:rounded-full   before:w-4 before:h-4 before:bg-primary">

   </div>
   <div>
      <h2 className="font-medium text-xl ">Master degree in software engineering</h2>
      
      <h3 className="font-medium">2020-2022</h3>
      <p className="italic text-muted-foreground">Iben khaldun - Tiaret  </p>
    </div>

    </div>
    </MotionDiv>
    
   
<MotionDiv>

    <h1 className="font-bold text-2xl text-primary">Experiance</h1>
  
   <div className="relative flex  gap-x-4 py-2">
   <div className=" before:content-[''] before:-left-1.5 before:absolute before:rounded-full   before:w-4 before:h-4 before:bg-primary
   after:content-['']  after:absolute after:-left-0.5 after:top-4    after:w-1.5 after:h-full after:bg-primary
   ">

   </div>
 
  <div>
      <h2 className="font-medium text-xl ">Freelancer on Fiverr/Upwork</h2>
      <h3 className="font-medium">2022-2024</h3>
      <p className="text-muted-foreground">
      Experienced freelancer specializing in building responsive web and desktop applications. I also offer professional digital design services to create visually appealing and user-friendly interfaces. Dedicated to delivering high-quality solutions tailored to your needs.
      </p>
    </div>
 

    </div>
   
    <div className="relative flex  gap-x-4 py-2">
   <div className=" before:content-[''] before:-left-1.5 before:absolute before:rounded-full   before:w-4 before:h-4 before:bg-primary">

   </div>
   <div>
      <h2 className="font-medium text-xl ">Computer Sience teacher </h2>
      
      <h3 className="font-medium">2023-2024</h3>
      <p className="text-muted-foreground">
       
Experienced computer science teacher offering courses in Python, web development (HTML and CSS),Javascript, and databases. Passionate about helping students grasp complex concepts and develop practical skills. Dedicated to delivering engaging and comprehensive lessons tailored to diverse learning needs.
      </p>
    </div>

    </div>
 


    
   
</MotionDiv>

    
   

   

   </div>


 

  
  
   <div>
   <MotionDiv>
    <h1 className="font-bold text-2xl text-primary">Skills</h1>
    </MotionDiv>
    <div className="space-y-4 mt-2 text-lg ">
    {
        skills.map((skill,index)=>(

       <SkillItem skill={skill} key={index}/>
        ))
      }
     
    </div>
   </div>

   
  
   
   


   </div>
   
    </section>

    <section
    id="projects"
     className="space-y-8 my-16"
     >



   <MotionDiv>
   <div className="my-8 ">
   <h1 className="font-bold capitalize text-3xl sm:text-4xl text-secondary-foreground/90  text-center">projects</h1>
    <p className="text-muted-foreground text-center">Projects that I&apos;ve built recently</p>
    </div>
    <div className="flex flex-row justify-center w-full my-8">
  <div className="flex flex-row">
 {
  types.map((item,index)=>(
    <button onClick={()=>showCategory(item)} key={index} className={`flex-1   text-base capitalize px-4 pb-2 border-b-2 ${item===view ? 'border-primary text-primary':' text-muted-foreground'}`}>
    {item}
   </button>
  ))
 }
   
  </div>
 
   </div>
   </MotionDiv>
  
   


  

   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 px-8  ">
   {
  projectsData.map((item)=>(
   <ProjectCard project={item} key={item.slug}/>
  ))
  }
  </div>


   
    </section>

    <section
     id="contact"
     className="space-y-8 my-16"
    >
    <MotionDiv>
  <div className="my-8">
   <h1 className="font-bold text-3xl sm:text-4xl text-secondary-foreground/90  text-center">Contact</h1>
    <p className="text-muted-foreground text-center">Contact me for questions or hiring</p>
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
