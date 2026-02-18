"use client"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FaArrowRight } from 'react-icons/fa';
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { sign } from "crypto";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from 'next/link';
export default function HeaderComp() {

      const words = [
    { text: "Imdoc:", className: "text-black dark:text-white" },
    { text: "Turning", className: "text-black dark:text-white" },
    { text: "pixels", className: "text-black dark:text-white" },
    { text: "into", className: "text-black dark:text-white" },
    { text: "knowledge.", className: "text-blue-500" },
    { text: "answers.", className: "text-blue-500" },
    { text: "clarity.", className: "text-blue-500" },
  ];

  const scrollToFotter=()=>{
   
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", 
    });
  
  }

 
    return(
         <section>
    <div className="relative mx-auto flex min-h-screen w-full overflow-hidden flex-col items-center">
      

      <div className="absolute inset-0 h-full">
         <BackgroundRippleEffect />
      </div>

      
      <div className="relative z-10 mt-60 flex flex-col items-center w-full max-w-4xl px-4">
        
        <TypewriterEffect words={words} className="text-4xl md:text-6xl font-bold"/>
        
        <p className="mt-8 max-w-xl text-center text-slate-700 dark:text-slate-300 text-lg">
          Upload an image or PDF and get instant, intelligent explanations tailored for you.  
        </p>

        <div className="flex flex-row justify-center items-center pt-10 space-x-8">
          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/dashboard/image_exp">
              <HoverBorderGradient 
            containerClassName="rounded-full"
            as="button"
            
            className="bg-black text-white flex items-center space-x-2 px-6 py-3"
          >
             <span className="text-lg">Get Started</span> 
             <FaArrowRight />
          </HoverBorderGradient>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            
             <Link href="/dashboard/image_exp ">
              <HoverBorderGradient 
            containerClassName="rounded-full"
            as="button"
           
            className="bg-black text-white flex items-center space-x-2 px-6 py-3"
          >
             <span className="text-lg">Workspace</span> 
             <FaArrowRight />
          </HoverBorderGradient>
             </Link>  
            
          </SignedIn>

           <HoverBorderGradient 
            containerClassName="rounded-full"
            as="button"
            onClick={scrollToFotter}
            className="bg-gray-500 text-white flex items-center space-x-2 px-6 py-3"
          >
             <span className="text-lg">Learn More</span> 
             <FaArrowRight />
          </HoverBorderGradient>
        </div>

      </div>

    
    </div>
    </section>
    
    )
}