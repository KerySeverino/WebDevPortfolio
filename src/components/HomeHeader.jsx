import React from "react";
import { useEffect, useState } from "react"

function HomeHeader() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100); 
    }, []);
    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            {/* Name on Top */}
            <h1 className={`text-shadow text-6xl font-bold relative z-10 mb-[300px] transition-all duration-1100 ease-out
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[400px]'}`}>
                Kery Severino Diaz
            </h1>


            {/* Image in Background */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-120 h-120">
                <img src="/src/assets/self.jpg" alt="Profile" className="w-full h-full object-cover shadow-lg rounded-4xl"/>
            </div>

            {/* Large Portfolio Text */}
            <h2 className={`text-shadow text-6xl font-bold relative z-10 transition-all duration-1100 ease-out
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[-400px]'}`}>
                PORTFOLIO
            </h2>
        </div>
    );
}

export default HomeHeader;

