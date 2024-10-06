"use client"

import { z } from "zod"
import React, { useTransition } from 'react'
import MotionDiv from './MotionDiv'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { IoMdCheckmarkCircle } from "react-icons/io";
import { BsSendFill } from "react-icons/bs";
import { sendMail } from "@/lib/mail"
import { mailSchema } from "@/lib/schema"
import axios from 'axios'


const ContactForm = () => {
   
const [loading,sendMessage]=useTransition()
const form = useForm<z.infer<typeof mailSchema>>({
    resolver: zodResolver(mailSchema),
    defaultValues: {
      name:"",
      email: "",
      message:""
    },
  })
  async function  onSubmit(values: z.infer<typeof mailSchema>) {
   
    sendMessage(async()=>{
  const {email,message,name}=values
  try {
 await sendMail(email,name,message)
 
   toast("Success", {
       description: 'Message has been sent sucessfully.',
      icon:<IoMdCheckmarkCircle className="text-primary" size={20}/>,
   
     })
  } catch (error) {
   console.log(error)
  }
})
   
  }

  return (
  <MotionDiv>
  <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-1">
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Mr Hatem" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="exmple@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
         <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." cols={8} {...field}  className="resize-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit" className="py-4 px-4 flex items-center gap-4 text-base capitalize text-white" disabled={loading}>
        send
            <BsSendFill  />
            </Button>
      </form>
    </Form>
  </MotionDiv>
  )
}

export default ContactForm