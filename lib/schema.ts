
import { z } from "zod"

export const mailSchema = z.object({
    
    email: z.string().min(1,'Email is Required!').email(
      {
          message:'Email not valid!'
      }
    ),
    message:z.string().min(1,'Message is required!'),
    name:z.string().min(1,'Name is required!'),
  })