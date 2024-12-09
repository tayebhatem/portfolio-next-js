import React, { ReactNode } from 'react'

const Main = ({children}:{children:ReactNode}) => {
  return (
    <main className="max-w-screen-lg mx-auto mt-24   overflow-hidden">
    {children}
    </main>
   
  )
}

export default Main