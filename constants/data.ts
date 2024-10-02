import { Project } from "@/components/ProjectCard"

export const projects:Project[]=[
  {
    slug:'cridi',
    name:'Customer & Supplier Debt Management',
    description:"Cridi is a robust web application designed to simplify debt management for businesses dealing with customers and suppliers. Built with Next.js, Appwrite, Shadcn UI, Tailwind CSS, and React, the platform enables users to efficiently track debts, monitor payment delays, and generate detailed receipts for both debts and payments. Additionally, the app offers the capability to print customer and supplier cards with embedded QR codes for easy identification. A local subscription feature supports payments via Algeria's Edhahabia system, ensuring smooth transactions and seamless access to premium features.",
    thumnail:'/assets/cridi.PNG',
    github:'https://github.com/tayebhatem/credit-platfrom',
    url:'https://www.cridi.online',
    tools:[
      'react',
      'next js',
      'tailwind',
      'Appwrite',
    ],
    type:'web'

  },
  {
    slug:'webcam-meeting',
    name:'WebCam Meeting',
    description:'This innovative webcam meeting website, built with Next.js, React, and styled using Tailwind CSS, leverages Clerk for authentication and GetStream.io for real-time communication. The platform allows users to effortlessly set up online webcam meetings and share the meeting links with others to join. With secure authentication and a user-friendly interface, this system ensures a seamless and interactive online meeting experience across all devices.',
    thumnail:'/assets/meet.PNG',
    github:'https://github.com/tayebhatem/vedio-chat-with-next-js',
    url:'https://meet-opal.vercel.app/sign-in',
    tools:[
      'react',
      'next js',
      'tailwind',
      'Clerk',
    ],
    type:'web'
  },
  {
    slug:'ai-image',
    name:'Ai Image',
    description:'This AI-powered image editing website, built with Next.js, React, and styled using Tailwind CSS, utilizes Clerk for authentication and Cloudinary for image processing. Users can remove backgrounds, eliminate objects, and change image ratios with ease. The platform offers a subscription model, allowing users to purchase points for additional image editing and generation using the Edhahabia card. This comprehensive tool ensures a seamless and efficient image editing experience for all users.',
    thumnail:'/assets/imageai.PNG',
    github:'https://github.com/tayebhatem/ecomerce-website',
    url:'https://image-ai-delta.vercel.app',
    tools:[
      'react',
      'next js',
      'tailwind',
      'clerk',
    ],
    type:'web'
  },
   
    {
      slug:'auth-js-system',
      name:'Auth js System',
      description:'This advanced authentication system website, built with Next.js and styled using Tailwind CSS, leverages React, Prisma, and PostgreSQL for robust functionality. Utilizing Auth.js v5, the platform offers secure user authentication with support for Google and GitHub logins. It includes features such as email account confirmation with token verification, two-factor authentication (2FA), and a secure password reset process using tokens. This comprehensive system ensures a reliable and secure user authentication experience across all devices.',
      thumnail:'/assets/authsystem.PNG',
      github:'https://github.com/tayebhatem/next-js-auth-system',
      url:'https://next-js-auth-system-beryl.vercel.app/auth/login',
      tools:[
        'react',
        'next js',
        'tailwind',
        'prisma',
        'postgre SQL',
        'auth js',
      ],
      type:'web'
    },
 
    
    {
      slug:'language-instittue',
      name:'Language institute',
      description:'This responsive language institute website, built with Next.js, React, and styled using Tailwind CSS, offers a seamless and user-friendly experience. Prospective students can easily submit their application for a language course, and an email will be sent with detailed information about the selected language. This platform ensures efficient communication and provides a modern, accessible way to explore and enroll in language courses.',
      thumnail:'/assets/languageinstitute.PNG',
      github:'https://github.com/tayebhatem/language-institute-next-js',
      url:'https://amslay.netlify.app',
      tools:[
        'react',
        'next js',
        'tailwind',
      ],
      type:'web'
    },
    {
      slug:'school-management',
      name:'School Management',
      description:'This comprehensive school management website, built with Next.js, React, and styled using Tailwind CSS, leverages Supabase for robust backend functionality. Schools can sign up and manage their operations efficiently, with features to add or import students, add teachers, create schedules, and link teachers to classes. The platform also generates QR codes for each student, enabling easy attendance tracking through a mobile app. Additionally, teachers can view important announcements posted on the platform, ensuring smooth communication and streamlined school management.',
      thumnail:'/assets/schoolmanagement.PNG',
      github:'https://github.com/tayebhatem/madrassa-platfrom',
      url:'https://kateb-yacine.netlify.app',
      tools:[
        'react',
        'next js',
        'tailwind',
        'supabase',
      ],
      type:'web'
    },
    {
      slug:'e-comrece',
      name:'Ecomere website',
      description:'E-commerce platform, built with Next.js, styled using Tailwind CSS, and powered by Sanity for content management, offers a seamless shopping experience. Users can browse through a dynamic catalog of products, add items to their cart, and proceed through a secure checkout process that supports payments via Edhahabia card. With a responsive design optimized for all devices, our website ensures a smooth and intuitive experience on desktops, tablets, and smartphones.',
      thumnail:'/assets/dzcomerce.PNG',
      github:'https://github.com/tayebhatem/ecomerce-website',
      url:'https://dz-comerce.vercel.app',
      tools:[
        'react',
        'next js',
        'tailwind',
        'sanity',
      ],
      type:'web'

    },

    {
      slug:'school-management-app',
      name:'School Management App',
      description:'The accompanying mobile app, built with React Native and Expo Go, integrates seamlessly with our school management system powered by Supabase. Teachers can log in to their accounts, where they can create classes, scan students QR codes for attendance tracking, and access announcements posted by the school platform. This app ensures efficient classroom management and facilitates easy communication between teachers and students. With a user-friendly interface and real-time updates, it enhances the overall educational experience within the institution.',
      thumnail:'/assets/school management app.jpg',
      github:'https://github.com/tayebhatem/madrassa-app',
      url:'https://kateb-yacine.netlify.app',
      tools:[
        'react native',
        'expo go',
        'next js',
        'tailwind',
        'supabase',
      ],
      type:'mobile'
    },
  ]
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
  'Building robust and scalable web applications using the latest technologies such as HTML, CSS,SASS,Tailwind,TypeScript, JavaScript, React, Redux,Zustand,Next js,Vite.',
  ' Creating seamless and high-performance mobile apps for both Android and iOS platforms with  React Native,Expo Go.',
  'Designing engaging and accessible interfaces that provide excellent user experiences. Proficient in using tools like Figma and Adobe Illustrator to create visually appealing and user-friendly designs.',
  'Developing secure and efficient backends with Node.js, PHP,Python,Java',
  'Implementing and managing databases using MySQL, PostgreSQL, MongoDB, Prisma, and Supabase.',
  'Utilizing efficient data structures and algorithms to solve complex problems and optimize performance.',
  'Demonstrating strong analytical and problem-solving skills to overcome challenges and deliver effective solutions.',
  'Building robust and scalable RESTful APIs and GraphQL endpoints to support web and mobile applications.',
  'Implementing secure authentication methods using the latest technologies like Auth.js and JWT tokens.',
  'Extracting data from websites efficiently using APIs and tools like Python Selenium.',
  'Proficient in using Git and GitHub for version control, ensuring project integrity, collaboration, and seamless integration of new features.',
  ]