
import { languages } from '@/constants/data'
import { LanguageType } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface LanguageSlice {
  language:LanguageType
  
}

// Define the initial state using that type
const initialState: LanguageSlice = {
  language: languages[0],
}

export const languageSlice = createSlice({
  name: 'language',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeLanguage: (state, action: PayloadAction<LanguageType>) => {
      state.language = action.payload
    },
  },
})

export const {  changeLanguage } = languageSlice.actions



export default languageSlice.reducer