"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ThankYouComponent() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(13); 

  useEffect(() => {

    {/* Timer Redirect */}
    if (countdown === 0) {
      router.push("/");
      return;
    }

    {/* Timer */}
    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

        return () => clearTimeout(timer);
    }, [countdown, router]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/rainforest.jpg" alt="Background" fill className="object-cover" priority/>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Message */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <p className="text-3xl font-bold">
          <span className="typewriter">
            Thanks for reaching out!
          </span>
        </p>
        
        <p className="mt-5">
            I’ll get back to you faster than console.log()
            likely with a cat in my lap and coffee in hand.
        </p>
         
        <p className="text-lg text-gray-300 mt-10">
          Redirecting to the homepage in...
        </p>
        <p className="text-5xl font-mono text-indigo-500">{countdown}</p>
      </div>
    </div>
  );
}