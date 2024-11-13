import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

import LanguageProvider from "@/provider/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tayeb hatem",
  description: "tayeb hatem portfolio",
  icons:'/favicon.ico'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">

      <body className={inter.className}>
   
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <LanguageProvider>

      

      
        <Header/>
       <Main>
       {children}
       </Main>
        <Footer/>
        <Toaster />
        </LanguageProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}
