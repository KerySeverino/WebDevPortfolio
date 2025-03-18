"use client"; 
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProfileSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 150); // Delayed animation
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      {/* Name on Top */}
      <h1
        className={`text-shadow adaptable-title-size font-bold relative z-10 transition-all duration-1000 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
      >
        Kery Severino Diaz
      </h1>

      {/* Centered Profile Image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/self.jpg"
          alt="Profile"
          width={320}
          height={300}
          className="object-cover shadow-lg rounded-full"
        />
      </div>

      {/* Large Portfolio Text */}
      <h2
        className={`text-shadow adaptable-title-size font-bold relative z-10 mt-64 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        PORTFOLIO
      </h2>
    </div>
  );
}
