import React, { ReactNode } from 'react'

const Main = ({children}:{children:ReactNode}) => {
  return (
    <main className="max-w-screen-lg mx-auto mt-24   ">
    {children}
    </main>
   
  )
}

export default Main