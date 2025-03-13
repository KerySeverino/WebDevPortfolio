"use client";
import Image from "next/image";
import { useEffect, useState } from "react"

export default function HomeHeader(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
      <div className="flex flex-col items-center justify-center h-screen relative">
        {/* Name on Top - Smooth Rise Effect */}
        <h1
          className={`text-shadow text-responsive-size font-bold relative z-10 mb-[300px] transition-all duration-[1000ms] ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Kery Severino Diaz
        </h1>
      
        {/* Image in Background */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-center">
          <Image
            src="/self.jpg"
            alt="Profile"
            width={240}
            height={240}
            className="img-responsive-size object-cover shadow-lg rounded-full"
          />
        </div>
      
        {/* Large Portfolio Text */}
        <h1
          className={`text-shadow text-responsive-size font-bold relative z-10 transition-all duration-[1000ms] ease-out delay-200 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          PORTFOLIO
        </h1>
      </div>
    );
}