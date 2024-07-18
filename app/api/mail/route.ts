'use server'

import { sendMail } from "@/lib/mail"

export async function POST(request: Request) {

 
      const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    if(!email || !name ||  !message ) return Response.json({message:'Empty fields'})
     await sendMail(email,name,message)
  
    return Response.json({ message:'Message has been sent sucessfully.' })
  }