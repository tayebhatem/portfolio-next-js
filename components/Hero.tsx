'use client'

import { useRouter } from "next/navigation";
import OrbitingCircles from "./ui/orbiting-circles";
import {
  useWindowSize,
} from '@react-hook/window-size'
export type IconProps = React.HTMLAttributes<SVGElement>;
export function Hero() {
  const [width, height] = useWindowSize()
    const router=useRouter()
    const Icons = {
        gitHub: (props: IconProps) => (
          <svg viewBox="0 0 438.549 438.549" 
          {...props}
          className="rounded-full cursor-pointer w-8"
          onClick={()=>{
             router.push("https://github.com/tayebhatem")
          }}
          >
            <path
              fill="currentColor"
              d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
          </svg>
        ),
        linkedIn: (props: IconProps) => (
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
          {...props}
          className="rounded-full cursor-pointer  w-8"
          onClick={()=>{
             router.push("https://www.linkedin.com/in/tayeb-hatem-3a2100156/")
          }}
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#0077B5"></circle> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" fill="white"></path> </g></svg>
        ),
        upWork: (props: IconProps) => (
          <svg xmlns="http://www.w3.org/2000/svg" 
          aria-label="Upwork" 
          role="img" 
          className="rounded-full cursor-pointer  w-8"
          {...props}
         onClick={()=>{
          router.push("https://www.upwork.com/freelancers/~019526742efa60c32e")
         }}
          viewBox="0 0 512 512" 
          fill="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#6fda44"></rect>
          <path fill="#ffffff" d="M357.2,296.9c-17,0-33-7.2-47.4-18.9l3.5-16.6l0.1-.6c3.2-17.6,13.1-47.2,43.8-47.2c23,0,41.7,18.7,41.7,41.7S380.2,296.9,357.2,296.9L357.2,296.9z M357.2,171.4c-39.2,0-69.5,25.4-81.9,67.3c-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0,21.7-17.6,39.3-39.3,39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0,44.9,36.5,81.8,81.4,81.8s81.4-36.9,81.4-81.8v-18.4c8.2,17.1,18.2,34.4,30.4,49.6l-25.8,121.4h43.1l18.7-88c16.4,10.5,35.2,17.1,56.8,17.1c46.2,0,83.8-37.8,83.8-84.1C440.9,209,403.4,171.4,357.2,171.4"></path></g></svg>
        ),
       
      };
      

  return (
    <div className="relative flex    w-full h-full sm:h-[400px] flex-col items-center justify-center  ">
     <img src="/assets/profile.jpg" className="object-cover rounded-full size-60 border-8 border-primary  sm:size-72"/>
      {
        width>640 && 
        <>
        <OrbitingCircles
        className="size-12    border-none bg-transparent hidden sm:flex justify-center items-center"
        radius={180}
        duration={20}
        
      >

        <Icons.gitHub  />
      </OrbitingCircles>
      
      <OrbitingCircles
       className="size-12    border-none bg-transparent hidden sm:flex justify-center items-center"
        radius={180}
        duration={20}
        delay={20}
       
      >
        <Icons.linkedIn />
      </OrbitingCircles>

      <OrbitingCircles
       className="size-12    border-none bg-transparent hidden sm:flex justify-center items-center"
        radius={180}
        duration={20}
        delay={3}
       
      >
        <Icons.upWork />
      </OrbitingCircles>
        </>
      }
      
    </div>
  );
}

