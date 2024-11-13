import { languages } from "@/constants/data";
import { LanguageType } from "@/types";

import {create} from 'zustand'

interface languageState{
    language:LanguageType;
    changeLanguage:(language:LanguageType)=>void
}
const useLanguageStore=create<languageState>((set)=>({
    language:languages[0],
     changeLanguage:(language:LanguageType)=>{
        localStorage.setItem('lang',language.id)
      set({language})
     }
}))
export default useLanguageStore