"use client"; 
import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineYoutube,  AiOutlineLinkedin} from "react-icons/ai";

export default function HeroComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 150); 
  }, []);

  return (
    <>
    {/* Container */}
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/desktop.jpg" alt="Background" fill className="object-cover" priority/>
      </div>
  
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
  
      {/* Title */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h1 className={`text-4xl lg:text-6xl font-bold relative z-10 transition-all duration-800 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}> 
          Kery Severino Diaz
        </h1>
        <h2 className="text-3xl mt-4">
          <span className="typewriter"> Aspiring AI / ML Engineer </span>
        </h2>

        {/* Bio */}
        <div className="ml-10 mr-10">
          <div className="mt-10 max-w-xl text-lg text-gray-300 text-center">
            <p>I’ve found my limit a thousand times and still, I press further.</p>
          </div>
        </div>
        

        {/* Call-to-action */}
        <a href="/portfolio" className="button-style">
          View My Work
        </a>

        {/* Social Links */}
        <div className="absolute bottom-5 text-center">
          <h2 className="italic animate-bounce"> Connect with me! </h2>
            <ul className="flex gap-5">         
              <li><a href="https://github.com/KerySeverino"><AiOutlineGithub size={40} className="social-page-link"/></a></li>
              <li><a href="https://www.youtube.com/@Kersevtech/videos"><AiOutlineYoutube size={40} className="social-page-link"/></a></li>
              <li><a href="https://www.instagram.com/kersevdiaz"><AiOutlineInstagram size={40} className="social-page-link"/></a></li>
              <li><a href="https://www.linkedin.com/in/kery-severino-diaz-ba21bb281"><AiOutlineLinkedin size={40} className="social-page-link"/></a></li>  
            </ul>
        </div>
      </div>

    </div>
  </>
  );
}