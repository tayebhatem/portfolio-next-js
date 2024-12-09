import React, { ReactNode } from 'react'

const Main = ({children}:{children:ReactNode}) => {
  return (
    <main className="max-w-screen-lg mx-auto mt-36 px-6 lg:px-0   ">
    {children}
    </main>
   
  )
}

export default Main