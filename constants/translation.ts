import { LanguageType } from "@/types";

export const headerTranslation = (language: LanguageType) => {
  const translations = {
    en: {
      home: "Home",
      technologies: "Technologies",
      about: "About",
      projects: "Projects",
      contact: "Hire me",
    },
    fr: {
      home: "Accueil",
      technologies: "Technologies",
      about: "À propos",
      projects: "Projets",
      contact: "Embauchez moi",
    },

  };

  return translations[language.id] || translations.en; 
};

export const homeSectionTranslation = (language: LanguageType) => {
    const translations = {
      en: {
        title: "I'm a",
        words: ["web developer", "mobile developer"],
        description: "I am a passionate and dedicated web and mobile developer, creating dynamic and user-friendly digital solutions. My expertise lies in crafting responsive websites and intuitive mobile applications that not only meet user needs but also drive business success.",
        downloadCv: "Resume",
        hireMe:'Hire me'
      },
      fr: {
        title: "Je suis un",
        words: ["développeur web", "développeur mobile"],
        description: "Je suis un développeur web et mobile passionné et dévoué, créant des solutions numériques dynamiques et conviviales. Mon expertise réside dans la création de sites web réactifs et d'applications mobiles intuitives qui répondent non seulement aux besoins des utilisateurs, mais contribuent également au succès des entreprises.",
        downloadCv: "CV",
        hireMe:'Embauche moi'
      },
      
    };
  
    return translations[language.id] || translations.en;
  };

  export const technologiesSectionTranslation = (language: LanguageType) => {
    const translations = {
      en: {
        title: "Technologies",
        description: "Technologies I've used in my projects",
      },
      fr: {
        title: "Technologies",
        description: "Technologies que j'ai utilisées dans mes projets",
      },
    
    };
  
    return translations[language.id] || translations.en;
  };


  export const aboutSectionTranslation = (language: LanguageType) => {
    const translations = {
      en: {
        title: "About",
        description: "Information about my profile",
        educationTitle: "Education",
        experienceTitle: "Experience",
        skillsTitle: "Skills",
        education: [
          {
            degree: "Bachelor's degree in Computer Science",
            years: "2017-2020",
            institution: "Ibn Khaldun - Tiaret",
          },
          {
            degree: "Master's degree in Software Engineering",
            years: "2020-2022",
            institution: "Ibn Khaldun - Tiaret",
          },
        ],
        experience: [
          {
            title: "Freelancer",
            years: "June 2023 - December 2024",
            description:
              "Specialized in building responsive web and mobile apps and providing digital design services for visually appealing, user-friendly interfaces.",
          },
          {
            title: "Full Stack Developer at Scholia",
            years: "December 2024 – Present",
            description:
              "Building a platform for students to submit admissions, upload documents, and communicate with schools using Next.js, Tailwind CSS, and Appwrite.",
          },
          {
            title: "Front-End Developer at Vosyn",
            years: "January 2025 – April 2025",
            description:
              "Worked on fixing bugs, developing responsive UIs with Material UI (MUI), and contributing to a video/audio player section for smooth playback and interaction.",
          },
        ]
        
      },

      fr: {
        title: "À propos",
        description: "Informations sur mon profil",
        educationTitle: "Éducation",
        experienceTitle: "Expérience",
        skillsTitle: "Compétences",
        education: [
          {
            degree: "Licence en Informatique",
            years: "2017-2020",
            institution: "Ibn Khaldun - Tiaret",
          },
          {
            degree: "Master en Génie Logiciel",
            years: "2020-2022",
            institution: "Ibn Khaldun - Tiaret",
          },
        ],
        experience: [
          {
            title: "Freelance sur Fiverr/Upwork",
            years: "2022-2024",
            description:
              "Freelance expérimenté spécialisé dans la création d'applications Web et mobiles réactives. J'offre également des services de conception numérique professionnels pour créer des interfaces visuellement attrayantes et conviviales. Dévoué à fournir des solutions de haute qualité adaptées aux besoins des clients.",
          },
          {
            title: "Professeur d'Informatique",
            years: "2023-2024",
            description:
              "Professeur d'informatique expérimenté proposant des cours en Python, développement web (HTML, CSS, et JavaScript) et bases de données. Passionné par l'aide aux étudiants pour comprendre des concepts complexes et développer des compétences pratiques. Dévoué à fournir des leçons engageantes et complètes adaptées aux divers besoins d'apprentissage.",
          },
        ],
      },
   
    };
  
    return translations[language.id] || translations.en;
  };

  export const projectsSectionTranslation = (language: LanguageType) => {
    const translations = {
      en: {
        title: "Projects",
        description: "Projects I've built recently",
      },
      fr: {
        title: "Projets",
        description: "Projets que j'ai réalisés récemment",
      }

    }

    return translations[language.id] || translations.en;
    }
    export const contactSectionTranslation = (language: LanguageType) => {
        const translations = {
          en: {
            title: "Hire me",
            description: "Get in touch with me",
          },
          fr: {
            title: "Embauchez moi",
            description: "Prenez contact avec moi",
          },
         
        };
      
        return translations[language.id] || translations.en;
      };
      
