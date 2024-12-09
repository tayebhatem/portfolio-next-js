import { LanguageType, ProjectType, SkillType } from "@/types";

export const projects: ProjectType[] = [
  {
    slug: 'banking-landing-page',
    name: {
      en: 'Banking Landing Page',
      fr: 'Page de destination bancaire',
    },
    description: {
      en: 'This is a modern and responsive banking landing page, built with Vite, styled using Tailwind CSS, and enhanced with Framer Motion for smooth animations. The landing page features a sleek and professional design tailored for financial institutions. It includes sections for showcasing banking services, customer testimonials, call-to-action buttons for account creation, and an intuitive contact form. With its responsive design, the landing page delivers an optimized user experience across desktops, tablets, and mobile devices, while the animations create a dynamic and engaging user interface.',
      fr: "Il s'agit d'une page de destination bancaire moderne et réactive, construite avec Vite, stylée avec Tailwind CSS et enrichie par Framer Motion pour des animations fluides. La page d'accueil présente un design élégant et professionnel adapté aux institutions financières. Elle inclut des sections pour mettre en valeur les services bancaires, les témoignages de clients, des boutons d'appel à l'action pour la création de compte et un formulaire de contact intuitif. Avec son design réactif, la page offre une expérience utilisateur optimisée sur les ordinateurs de bureau, tablettes et appareils mobiles, tandis que les animations créent une interface utilisateur dynamique et attrayante."
    },
    thumbnail: '/assets/banking.svg',
    github: 'https://github.com/tayebhatem/Bancking-landing-page',
    url: 'https://banking-landing-page-two.vercel.app/',
    tools: ['vite', 'tailwind', 'framer motion'],
    type: 'web',
  },
  
  {
    slug: 'cridi',
    name: {
      en:'Store Management System',
      fr:'Système de gestion de magasin'
    },
    description: {
      en: "Cridi is a robust web application designed to simplify store management for businesses dealing with customers and suppliers. The platform enables users to efficiently track credits, monitor payment delays, and generate detailed receipts for both debts and payments. Store owners can also add products, publish posts, search for suppliers, communicate with both suppliers and customers, and send push notifications to keep them updated. Additionally, the app offers the capability to print customer and supplier cards with embedded QR codes for easy identification. A local subscription feature supports payments via Algeria's Edhahabia system, ensuring smooth transactions and seamless access to premium features.",
      fr: "Cridi est une application web robuste conçue pour simplifier la gestion des magasins traitant avec des clients et des fournisseurs. La plateforme permet aux utilisateurs de suivre efficacement les crédits, de surveiller les retards de paiement et de générer des reçus détaillés pour les créances et les paiements. Les propriétaires de magasins peuvent également ajouter des produits, publier des posts, rechercher des fournisseurs, communiquer avec les fournisseurs et les clients, et envoyer des notifications push pour les tenir informés. De plus, l'application offre la possibilité d'imprimer des cartes clients et fournisseurs avec des QR codes intégrés pour une identification facile. Une fonctionnalité d'abonnement local prend en charge les paiements via le système Edhahabia de l'Algérie, assurant des transactions fluides et un accès sans faille aux fonctionnalités premium."
    },
    thumbnail: '/assets/cridi.PNG',
    github: 'https://github.com/tayebhatem/credit-platfrom',
    url: 'https://www.cridi.online',
    tools: ['react', 'next js', 'tailwind', 'Appwrite'],
    type: 'web'
  },
  {
    slug: 'cridi-mobile',
    name: {
      en: 'Cridi Mobile',
      fr: 'Cridi Mobile',
    },
    description: {
      en: "The Cridi Mobile App is designed for customers and suppliers to track their debts and payments on the go. Users can view detailed payment histories, receive instant push notifications for new debts, payments, and messages from stores, and communicate directly with stores through in-app chat. Customers can also view and search products, their prices, and posts from stores. Suppliers can receive add requests from stores. This mobile companion to the Cridi web platform offers a convenient and user-friendly way for customers and suppliers to stay updated on their financial interactions.",
      fr: "L'application Cridi Mobile est conçue pour que les clients et les fournisseurs puissent suivre leurs crédits et paiements en déplacement. Les utilisateurs peuvent consulter l'historique détaillé des paiements, recevoir des notifications push instantanées pour les nouveaux crédits, paiements et messages des magasins, et communiquer directement avec les magasins via le chat intégré. Les clients peuvent également voir et rechercher des produits, leurs prix et des publications des magasins. Les fournisseurs peuvent recevoir des demandes d'ajout de la part des magasins. Ce compagnon mobile de la plateforme web Cridi offre un moyen pratique et convivial pour les clients et fournisseurs de rester informés de leurs interactions financières. L'application utilise Appwrite et Firebase pour une synchronisation des données en temps réel et des notifications push sans faille."
    },
    thumbnail: '/assets/cridi-mobile.jpg',
    github: 'https://github.com/tayebhatem/cridi-app',
    url: 'https://play.google.com/store/apps/details?id=com.tayebhatem.cridi',
    tools: ['react native', 'expo', 'appwrite', 'firebase'],
    type: 'mobile',
  },
  {
    slug: 'e-comrece',
    name: {
      en: 'Ecomere website',
      fr: 'Site Ecomere',
    },
    description: {
      en: 'E-commerce platform, built with Next.js, styled using Tailwind CSS, and powered by Sanity for content management, offers a seamless shopping experience. Users can browse through a dynamic catalog of products, add items to their cart, and proceed through a secure checkout process that supports payments via Edhahabia card. With a responsive design optimized for all devices, our website ensures a smooth and intuitive experience on desktops, tablets, and smartphones.',
      fr: 'Plateforme de commerce électronique, construite avec Next.js, stylée avec Tailwind CSS et alimentée par Sanity pour la gestion du contenu, offrant une expérience d\'achat fluide. Les utilisateurs peuvent parcourir un catalogue dynamique de produits, ajouter des articles à leur panier et passer par un processus de paiement sécurisé qui prend en charge les paiements via la carte Edhahabia. Avec un design réactif optimisé pour tous les appareils, notre site web assure une expérience fluide et intuitive sur les ordinateurs de bureau, les tablettes et les smartphones.',
    },
    thumbnail: '/assets/dzcomerce.PNG',
    github: 'https://github.com/tayebhatem/ecomerce-website',
    url: 'https://dz-comerce.vercel.app',
    tools: ['react', 'next js', 'tailwind', 'sanity'],
    type: 'web',
  },
  {
    slug: 'personal-portfolio',
    name: {
      en: 'Personal Portfolio',
      fr: 'Portfolio Personnel',
    },
    description: {
      en: "This is a modern, responsive personal portfolio website showcasing projects, skills, and experience. Built with Next.js, React, and styled using Tailwind CSS, the portfolio highlights work through project galleries, interactive components, and smooth animations, this portfolio offers an engaging and professional online presence to connect with potential clients, collaborators, and employers.",
      fr: "Il s'agit d'un site web moderne et réactif de portfolio personnel mettant en valeur des projets, des compétences et de l'expérience. Développé avec Next.js, React et stylé avec Tailwind CSS, le portfolio présente les travaux à travers des galeries de projets, des composants interactifs et des animations fluides, ce portfolio offre une présence en ligne engageante et professionnelle pour se connecter avec des clients, collaborateurs et employeurs potentiels.",
    },
    thumbnail: '/assets/portfolio.PNG',
    github: 'https://github.com/tayebhatem/portfolio-next-js',
    url: 'https://tayebhatem.vercel.app',
    tools: ['react', 'next js', 'tailwind'],
    type: 'web',
  },
  {
    slug: 'webcam-meeting',
    name: {
      en: 'WebCam Meeting',
      fr: 'Réunion WebCam',
    },
    description: {
      en: 'This innovative webcam meeting website. The platform allows users to effortlessly set up online webcam meetings and share the meeting links with others to join. With secure authentication and a user-friendly interface, this system ensures a seamless and interactive online meeting experience across all devices.',
      fr: 'Ce site web innovant de réunion webcam. La plateforme permet aux utilisateurs de configurer facilement des réunions webcam en ligne et de partager les liens de réunion avec d\'autres pour les rejoindre. Avec une authentification sécurisée et une interface conviviale, ce système assure une expérience de réunion en ligne fluide et interactive sur tous les appareils.',
    },
    thumbnail: '/assets/meet.PNG',
    github: 'https://github.com/tayebhatem/vedio-chat-with-next-js',
    url: 'https://meet-opal.vercel.app/sign-in',
    tools: ['react', 'next js', 'tailwind', 'Clerk'],
    type: 'web',
  },
  {
    slug: 'auth-js-system',
    name: {
      en: 'Next.js Auth System',
      fr: "Système d'authentification Next.js"
    },
    description: {
      en: 'This advanced authentication system website, built with Next.js and styled using Tailwind CSS, leverages React, Prisma, and PostgreSQL for robust functionality. Utilizing Auth.js v5, the platform offers secure user authentication with support for Google and GitHub logins. It includes features such as email account confirmation with token verification, two-factor authentication (2FA), and a secure password reset process using tokens. This comprehensive system ensures a reliable and secure user authentication experience across all devices.',
      fr: "Ce site web d'authentification avancée, construit avec Next.js et stylisé avec Tailwind CSS, utilise React, Prisma et PostgreSQL pour des fonctionnalités robustes. Utilisant Auth.js v5, la plateforme offre une authentification sécurisée des utilisateurs avec prise en charge des connexions Google et GitHub. Il inclut des fonctionnalités telles que la confirmation de compte par e-mail avec vérification de token, l'authentification à deux facteurs (2FA) et un processus de réinitialisation de mot de passe sécurisé utilisant des tokens. Ce système complet garantit une expérience d'authentification des utilisateurs fiable et sécurisée sur tous les appareils."
    },
    thumbnail: '/assets/authsystem.PNG',
    github: 'https://github.com/tayebhatem/nextjs-auth-system',
    url: 'https://auth-system-nextjs.vercel.app',
    tools: ['react', 'next js', 'tailwind', 'prisma', 'postgresql'],
    type: 'web'
  }
  
];

  export const types=[
    'all',
    'web',
     'mobile'
  ]
  export const images = [
    'html',
    'css',
    'js',
    'ts',
    'sass',
    'tailwind',
    'react',
    'redux',
    'nextjs',
    'php',
    'python',
    'java',
    'c++',
    'mysql',
    'postgres',
    'supabase',
    'prisma',
    'authjs',
    'figma',
    'github',
    'git'
  ]
  export const skills=[
    'JavaScript, TypeScript, Python, Java, Php',
    'HTML ,CSS, Tailwind CSS',
    'React, React Native, Expo go, Node.js, Vite, Express',
    'Git, GitHub, Firebase, Prisma, Clerk, Appwrite, Supabase, RESTful APIs',
    'MySQL, MongoDB, PostgreSQL',
    'Figma, Adobe Illustrator, Vs Code',
    'UI/UX Design, Redux, Zustand, Web scraping, Third Party Libraries, WordPress, CMS'
  ]

  export const languages:LanguageType[]=[
       {
        id:'en',
        name:'English'
       },
      {
        id:'fr',
        name:'Français'
      },
     
  ]


  export const technicalSkills:SkillType[] = [
    {
      title: { en: "Languages", fr: "Langages" },
      skills:  'JavaScript, TypeScript, Python, Java , Php'
    },
    {
      title: { en: "Frameworks & Libraries", fr: "Frameworks & Bibliothèques" },
      skills:'React, React Native, Expo go, Node.js,Vite, Express'
    },
    {
      title: { en: "Styling", fr: "Styles" },
      skills: 'HTML ,CSS, Tailwind CSS, Bootstrap, shadcn ui'
    },
    {
      title: { en: "Tools & Platforms", fr: "Outils & Plateformes" },
      skills: 'Git, GitHub, Firebase, Prisma, Clerk, Appwrite, Supabase, RESTful APIs,Wordpress'
    },
    {
      title: { en: "Database Management", fr: "Gestion de Bases de Données" },
      skills: 'MySQL, MongoDB, PostgreSQL'
    },
   
    {
      title: { en: "Others", fr: "Autres" },
      skills: 'UI/UX Design, Redux, Zustand, Web scraping,Third Party Libraries'
    },
    {
      title: { en: "Design Tools", fr: "Outils de Conception" },
      skills: 'Figma, Adobe Illustrator'
    }
  ];
  

  export const languageSpeak=[
    {
      name:{
        en:'Arabic',
        fr:'Arabe'
      },
      level:3
    },
    {
      name:{
        en:'English',
        fr:'Anglais'
      },
      level:2
    },
    {
      name:{
        en:'French',
        fr:'Français'
      },
      level:1
    },
   
  ]