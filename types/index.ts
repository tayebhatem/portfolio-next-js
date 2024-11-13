export interface ProjectType {
    slug: string;
    name: {
      en: string;
      fr: string;
    };
    description: {
      en: string;
      fr: string;
    };
    thumbnail: string;
    github: string;
    url: string;
    tools: string[];
    type: string;
  }
export interface LanguageType{
    id:'en' | 'fr';
    name:string;
}
export interface SkillType{
    title:{
        en:string;
        fr:string
    },
    skills:string
}