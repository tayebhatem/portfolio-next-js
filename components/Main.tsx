import React, { ReactNode } from 'react'

const Main = ({children}:{children:ReactNode}) => {
  return (
    <main className="mx-8 h-full lg:mx-auto lg:max-w-5xl mt-24   overflow-hidden">
    {children}
    </main>
   
  )
}

export default Main