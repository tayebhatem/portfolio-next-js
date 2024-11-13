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
import { IoMdCheckmarkCircle } from "react-icons/io"
import { BsSendFill } from "react-icons/bs"
import { sendMail } from "@/lib/mail"
import useLanguageStore from "@/stores/useLanguageStore"
import axios from "axios";
import { AlertCircle } from "lucide-react"
const ContactForm = () => {
  const { language } = useLanguageStore()  // Get current language
  const [loading, sendMessage] = useTransition()

  const mailSchema = z.object({
    
    email: z.string().min(1,language.id==='en'?'Email is Required!':"L'email est requis!").email(
      {
          message:language.id==='en'?'Email not valid!':'Email invalide!'
      }
    ),
    message:z.string().min(1,language.id==='en'?'Message is required!':'Le message est requis!'),
    name:z.string().min(1,language.id==='en'?'Name is required!':'Le nom est requis!'),
  })
  const form = useForm<z.infer<typeof mailSchema>>({
    resolver: zodResolver(mailSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  })

  async function onSubmit(values: z.infer<typeof mailSchema>) {
    sendMessage(async () => {
      const { email, message, name } = values
      try {
       const formData = new FormData();
       formData.append('name', name);
       formData.append('email', email);
       formData.append('message', message);
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/mail`, formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
        )
        toast("Success", {
          description: toastTranslations[language.id].success,
          icon: <IoMdCheckmarkCircle className="text-primary" size={20} />,
        })
        form.reset()
      } catch (error) {
        console.log(error)
        toast("Error", {
          description: toastTranslations[language.id].error,
          icon: <AlertCircle className="text-red-500" size={20} />,
        })
      }
    })
  }

  const translations = {
    en: {
      fullName: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      messagePlaceholder: "Type your message here..."
    },
    fr: {
      fullName: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
       messagePlaceholder: "Tapez votre message ici..."
    }
  }

  const toastTranslations = {
    en: {
      success: 'Message has been sent successfully.',
      error: 'An error occurred while sending your message.'
    },
    fr: {
      success: 'Le message a été envoyé avec succès.',
      error: 'Une erreur s\'est produite lors de l\'envoi de votre message.'
    }
  }

  const { fullName, email, message, send,messagePlaceholder } = translations[language.id] || translations.en

  return (
    <MotionDiv>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-4 px-1">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fullName}</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                <FormLabel>{email}</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>{message}</FormLabel>
                <FormControl>
                  <Textarea placeholder={messagePlaceholder} cols={8} {...field} className="resize-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full items-center gap-4 text-base capitalize text-white" disabled={loading}>
            {send}
            <BsSendFill />
          </Button>
        </form>
      </Form>
    </MotionDiv>
  )
}

export default ContactForm
