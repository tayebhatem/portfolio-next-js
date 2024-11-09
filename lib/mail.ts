'use server'
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "tayebhatem98@gmail.com",
      pass: process.env.STMP_PASSWORD,
    },
    secure:true,
    tls: {
      rejectUnauthorized: false, 
    },
  });

  export const sendMail=async(email:FormDataEntryValue | null,name:FormDataEntryValue | null,message:FormDataEntryValue | null)=>{
   
      return await new Promise((resolve, reject) => {
        transporter.sendMail({
          to: 'tayebhatem98@gmail.com', // list of receivers
        subject: "Portfolio mail", // Subject line
        html: `
        <p>Name : ${name}</p>
        <p>Email : ${email}</p>
        <p>Message: ${message}</p>
        `, // html body
        }, (err, info) => {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
}
