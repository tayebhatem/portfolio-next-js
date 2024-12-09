import { LanguageType } from "@/types";

export const headerTranslation = (language: LanguageType) => {
  const translations = {
    en: {
      home: "Home",
      technologies: "Technologies",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    fr: {
      home: "Accueil",
      technologies: "Technologies",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
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
            title: "Freelancer on Fiverr/Upwork",
            years: "2022-2024",
            description:
              "Experienced freelancer specializing in building responsive web and mobile applications. I also offer professional digital design services to create visually appealing and user-friendly interfaces. Dedicated to delivering high-quality solutions tailored to client needs.",
          },
          {
            title: "Computer Science Teacher",
            years: "2023-2024",
            description:
              "Experienced computer science teacher offering courses in Python, web development (HTML, CSS, and JavaScript), and databases. Passionate about helping students grasp complex concepts and develop practical skills. Dedicated to delivering engaging and comprehensive lessons tailored to diverse learning needs.",
          },
        ],
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
            title: "Contact",
            description: "Get in touch with me",
          },
          fr: {
            title: "Contact",
            description: "Prenez contact avec moi",
          },
          ar: {
            title: "الاتصال",
            description: "تواصل معي",
          },
        };
      
        return translations[language.id] || translations.en;
      };
      
