import React, { ReactNode } from 'react'
import MotionDiv from './MotionDiv'

const Section = ({children,id,title,description}:{children:ReactNode,id:string,title:string | undefined,description:string | undefined}) => {
  return (
    <section id={id} className="space-y-8 my-16">
    {
        title && description &&
        <MotionDiv>
        <div className="my-8">
          <h1 className="font-bold text-3xl sm:text-4xl text-secondary-foreground/90 text-center capitalize">
          {title}
          </h1>
          <p className="text-muted-foreground text-center">
              {description}
          </p>
        </div>
      </MotionDiv>


    }

{children}
    </section>
  )
}

export default Section
