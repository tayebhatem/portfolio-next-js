'use client'
import { Check, Copy, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaFacebookSquare, FaLinkedin, FaShare, FaTelegram, FaViber, FaWhatsappSquare } from "react-icons/fa"
import useLanguageStore from "@/stores/useLanguageStore"
import { useEffect, useState } from "react"
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    ViberShareButton,
    WhatsappShareButton
  } from "react-share";
import { IoMdMail } from "react-icons/io"
export function ShareResume() {
    const {language}=useLanguageStore()
    const [isCopy, setisCopy] = useState(false)
    const url=`${process.env.NEXT_PUBLIC_URL}/resume`
    const handleCopyLink=async()=>{
        await navigator.clipboard.writeText(url)
        setisCopy(true)
    }
    
    useEffect(() => {
       if(isCopy){
        const timer = setInterval(() => {
            setisCopy(false)
        }, 1000);
            return () => clearInterval(timer);
    
       }
    }, [isCopy])
    
  return (
    <Dialog>
      <DialogTrigger asChild>
       <button>
       <FaShare size={28} className='text-muted-foreground hover:opacity-30' />
       </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {language.id==='en'?"Share link":"Partager le lien"}
          </DialogTitle>
          <DialogDescription>
           {
            language.id==='en'?"Anyone who has this link will be able to view this.":"Toute personne disposant de ce lien pourra le consulter."
           }
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://www.tayebhatem.site"
              readOnly
            />
          </div>
         {
            isCopy?
            <Button variant={'outline'}>
                <Check/>
            </Button>
            :
            <Button type="submit" size="sm" className="px-3" onClick={handleCopyLink}>
            <span className="sr-only">
                  {language.id==='en'?"Copy":"Copie"}
              </span>
              <Copy />
            </Button>
         }
        </div>
        <DialogFooter className="">
            <div className="w-full flex flex-row  gap-x-2  items-center">
            <LinkedinShareButton url={url}>
         <FaLinkedin  className="text-primary size-9" />
         </LinkedinShareButton>    
         <WhatsappShareButton url={url}>
         <FaWhatsappSquare  className="text-primary size-9" />
         </WhatsappShareButton>
         <FacebookShareButton  url={url}>
         <FaFacebookSquare   className="text-primary size-9"/>
         </FacebookShareButton>
         <EmailShareButton url={url}>
         <IoMdMail  className="text-primary size-9"/>
         </EmailShareButton>
         <ViberShareButton  url={url}>
         <FaViber    className="text-primary size-9"/>
         </ViberShareButton>
         <TelegramShareButton  url={url}>
         <FaTelegram     className="text-primary size-9"/>
         </TelegramShareButton>
            </div>
        
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
