import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ProjectsTabs = () => {
  return (
   <div className='w-full bg-red-200 flex justify-center'>
     <Tabs defaultValue="account" >
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
 
</Tabs>
   </div>

  )
}

export default ProjectsTabs
