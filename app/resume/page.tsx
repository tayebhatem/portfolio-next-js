'use client'
import { ShareResume } from '@/components/custome-ui/ShareResume';
import { Card } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { languageSpeak, technicalSkills } from '@/constants/data';
import { aboutSectionTranslation, homeSectionTranslation, projectsSectionTranslation } from '@/constants/translation';
import useLanguageStore from '@/stores/useLanguageStore';
import React, { useRef } from 'react'
import { FaPhone,FaLocationDot,FaGithub,FaLink,FaLinkedin } from "react-icons/fa6";
import { IoMdMail, IoMdPrint } from "react-icons/io";
import {useReactToPrint} from 'react-to-print';
import { usePDF } from 'react-to-pdf';
import { BsFilePdf } from 'react-icons/bs';
 const projects = [
    {
      slug: 'cridi',
      name: {
        en: 'Store Management System',
        fr: 'Système de gestion de magasin',
      },
      description: {
        en: "Cridi streamlines store management by tracking debts, payments, and generating receipts. Stores can manage products, monitor customer payment delays, connect with suppliers and customers, send notifications, and print QR-coded cards. Local subscriptions support Edhahabia payments for premium features.",
        fr: "Cridi facilite la gestion des magasins en suivant les crédits, les paiements et en générant des reçus. Les magasins peuvent gérer les produits, surveiller les retards de paiement des clients, communiquer avec les fournisseurs et clients, envoyer des notifications et imprimer des cartes QR. Les abonnements locaux prennent en charge les paiements Edhahabia pour les fonctionnalités premium.",
      },
    },
    {
      slug: 'cridi-mobile',
      name: {
        en: 'Cridi Mobile',
        fr: 'Cridi Mobile',
      },
      description: {
        en: "Cridi Mobile App lets customers and suppliers track debts and payments, receive notifications, view products, communicate with stores, and send add requests to stores.",
        fr: "L'application Cridi Mobile permet aux clients et fournisseurs de suivre leurs crédits, de recevoir des notifications, de voir les produits, de communiquer avec les magasins, et d'envoyer des demandes d'ajout aux magasins.",
      },
    },
    {
      slug: 'e-commerce',
      name: {
        en: 'Ecomere website',
        fr: 'Site Ecomere',
      },
      description: {
        en: 'E-commerce platform with product filtering, search by price/category, and Edhahabia payment support.',
        fr: 'Plateforme e-commerce avec filtrage de produits, recherche par prix/catégorie et prise en charge des paiements Edhahabia.',
      },
    },
    {
      slug: 'personal-portfolio',
      name: {
        en: 'Personal Portfolio',
        fr: 'Portfolio Personnel',
      },
      description: {
        en: "Responsive portfolio showcasing projects, resume page, animations, and a contact section with multi-language support.",
        fr: "Portfolio réactif mettant en valeur des projets, une page de CV, des animations, et une section contact avec support multilingue.",
      },
    },
  ];
  
  
const ResumePage = () => {
    const {language}=useLanguageStore()
    const aboutTranslation=aboutSectionTranslation(language)
    const profileTranslation=homeSectionTranslation(language)
    const projectsTranslation=projectsSectionTranslation(language)
     const resumeRef = useRef<HTMLDivElement>(null);
     const { toPDF, targetRef } = usePDF({filename: 'cv.pdf'});
     const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
      });

  return (
   <div className='my-8 relative '>
     <div className='absolute  rounded-full bg-background top-2 z-10 right-2 p-3 flex flex-row gap-x-4 items-center'>
       <ShareResume/>
       
        <button onClick={handlePrint}>
        <IoMdPrint size={28} className='text-muted-foreground hover:opacity-30' />
        </button>
       <button onClick={() => toPDF()}>
        <BsFilePdf size={28} className='text-muted-foreground hover:opacity-30'/>
       </button>
    </div>
   <Card className='relative overflow-auto ' ref={targetRef}>
   


   <div className='grid grid-cols-3  min-w-[800px] ' ref={resumeRef}>

<div className='bg-primary p-10 space-y-2 col-span-1 flex flex-col items-center h-full '>
<div className="rounded-full overflow-hidden size-44 border-[6px] border-white " >
 <img src="/assets/profile.jpg" className="object-center"/>
</div>

<div className='space-y-2  w-full'>
<h1 className='text-lg text-white font-semibold border-b-2 border-white pb-1 uppercase'>contact</h1>
<div className='flex flex-col gap-y-1.5'>

 <p className='flex flex-row items-center gap-x-2 text-white text-sm'>
 <FaPhone />
     +213 7 79 67 49 76
 </p>

 <p className='flex flex-row items-center gap-x-2 text-white  text-sm'>
 <IoMdMail />
   tayebhatem98@gmail.com
 </p>

 <p className='flex flex-row items-center gap-x-2 text-white  text-sm'>
 <FaLocationDot />

 {language.id==='en'?"Bordj El Kiffan ,Algiers":"Bordj-el-kiffan ,Alger"}
 </p>

 <a href='https://www.tayebhatem.site'>
 <p className='flex flex-row items-center gap-x-2 text-white  '>
 <FaLink />
tayebhatem.site
 </p>
 </a>

 <a href='https://www.linkedin.com/in/tayeb-hatem-3a2100156'>
 <p className='flex flex-row items-center gap-x-2 text-white text-sm  '>
 <FaLinkedin  />
 linkedin.com/tayebhatem
 </p>
 </a>

 <a href='https://github.com/tayebhatem'>
 <p className='flex flex-row items-center gap-x-2 text-white text-sm'>
 <FaGithub />
 github.com/tayebhatem
 </p>
 </a>

</div>
</div>


<div className='space-y-2  w-full'>
<h1 className='text-lg text-white font-semibold border-b-2 border-white pb-1 uppercase'>{aboutTranslation.educationTitle}</h1>
{
 aboutTranslation.education.map((item,index)=>(
    <div key={index}>
    <h1 className='text-base font-medium text-white'>
     {item.degree}
     </h1>
    <h3 className='text-white font-medium'>
     {item.years}
     </h3>
    <p className='text-white text-sm '>
     {item.institution}
    </p>
    </div>
 ))
}
</div>


<div className='space-y-2 w-full'>
<h1 className='text-xl text-white font-semibold border-b-2 border-white pb-1 uppercase'>
    {aboutTranslation.skillsTitle}
</h1>
<div className='space-y-1'>
{
 technicalSkills.map((item,index)=>(
    <div className=' flex flex-row items-center gap-x-3' key={index}>
        <div className='w-1 h-1 bg-white rounded-full '></div>
         <p className='text-white text-xs flex-1' >
     {item.skills}
    </p>
    </div>
 ))
}
</div>
</div>

<div  className='space-y-2 w-full'>
<h1 className='text-lg text-white font-semibold border-b-2 border-white pb-1 uppercase'>
    {language.id==='en'?"Languages":"Languages"}
</h1>
<div className='space-y-0.5'>
{
    languageSpeak.map((item,index)=>(
        <div className='flex flex-row items-center gap-x-8' key={index}>
    <p className='text-white capitalize w-10 text-sm '>{language.id==='en'?item.name.en:item.name.fr}</p>
   <div className='flex flex-row gap-x-1.5 w-full '>
    {
         item.level===3 ?
         <>
          <span className='w-2 h-2 rounded-full bg-white'></span>
          <span className='w-2 h-2 rounded-full bg-white'></span>
          <span className='w-2 h-2 rounded-full bg-white'></span>
         </>
        : item.level===2 ?
        <>
         <span className='w-2 h-2 rounded-full bg-white'></span>
         <span className='w-2 h-2 rounded-full bg-white'></span>
         <span className='w-2 h-2 rounded-full border-2 border-white'></span>
        </>
       :
        <>
        <span className='w-2 h-2 rounded-full bg-white'></span>
        <span className='w-2 h-2 rounded-full border-2 border-white'></span>
        <span className='w-2 h-2 rounded-full border-2 border-white'></span>
       </>
    }
   </div>
</div>
    ))
}
</div>
</div>
</div>

<div  className='bg-white w-full col-span-2 space-y-2  px-4 py-6'>
<div className='space-y-1 '>
<h1 className='text-black/80 text-4xl uppercase font-bold '>tayeb hatem</h1>
<h2 className=' text-black/80 text-xl uppercase  '>
{language.id=='en'?"web developer":"développeur web"}
</h2>
<div className='border-b-4 border-b-primary w-24'>

</div>
</div>

<div className=' space-y-2'>
<h1 className='text-primary text-xl uppercase font-bold  border-b-2 pb-2 border-b-primary '>
{language.id==='en'?"profile":"profil"}
</h1>
<p className='text-muted-foreground  text-sm'>
    {
        profileTranslation.description
    }
</p>

</div>

<div className='space-y-1 '>
<h1 className='text-primary text-xl uppercase font-bold  border-b-2 pb-2 border-b-primary '>
    {aboutTranslation.experienceTitle}
</h1>
<div className='overflow-y-clip'>
{
                aboutTranslation.experience.map((item,index)=>(
                    <div className="relative flex gap-x-4 py-2 " key={index}>
                    <div className="before:content-[''] before:-left-1 before:top-3.5 before:absolute before:rounded-full before:w-3 before:h-3 before:bg-primary
                                     after:content-[''] after:absolute  after:top-4 after:w-1 after:h-full after:bg-primary">
                      </div>
                      <div>
                        <h2 className="font-semibold text-xl text-black">{item.title}</h2>
                        <h3 className="font-medium">{item.years}</h3>
                       <div className='flex flex-row gap-x-4 items-start'>
                        <span className='w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5'></span>
                       <p className="text-muted-foreground flex-1  text-sm">
                         {item.description}
                        </p>
                       </div>
                      </div>
                    </div>
                ))
             }

</div>

</div>


<div className='space-y-1 '>
<h1 className='text-primary  text-xl uppercase font-bold border-b-2 pb-2 border-b-primary '>
    {projectsTranslation.title}
</h1>
<div className='space-y-1' >
{
                projects.slice(0,4).map((item)=>(
                    <div className="relative flex gap-x-4" key={item.slug}>
                   
                      <div>
                        <h2 className="font-semibold text-xl text-black  ">
                            {language.id==='en'?item.name.en:item.name.fr}
                            </h2>
                       <div className='flex flex-row gap-x-4 items-start'>
                        <span className='w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5'></span>
                       <p className="text-muted-foreground flex-1  text-sm">
                       {language.id==='en'?item.description.en:item.description.fr}
                        </p>
                       </div>
                      </div>
                    </div>
                ))
             }

</div>

</div>

</div>


 </div>
   </Card>
 
   </div>
  )
}

export default ResumePage
