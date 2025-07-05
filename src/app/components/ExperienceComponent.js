"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function ExperienceComponent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
        setIsVisible(true);
        }, 150); 
    }, []);

  return (
    <>
        {/* Intro Section */}
        <div className="min-h-screen pb-20">
            <div className="text-center pt-20">
    
                <h1 className={`adaptable-title-size relative z-10 transition-all duration-800 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}> 
                    My Journey So Far
                </h1>
            </div>

            {/* Container */}
            <div className="pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-4 m-4 gap-4">
                {/* COOP Careers Card */}
                <div className="portfolio-card-effect">
                    <h1 className="font-bold"> COOP Careers : Fellowship </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/coopcareers_logo.png" alt="Profile" className="" width={150} height={70} />
                    </div>

                    <h1 className="font-bold mt-4"> Data Analyst Fellow (Incoming)</h1>
            

                 
                    <p className="mt-4"> Aug 13 - Dec 3, 2025 </p>
                </div>

                 {/* AWS re/Start Card */}
                 <div className="portfolio-card-effect">
                    <h1 className="font-bold"> AWS re/Start : Full-Time Program </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/awsrestart_logo.png" alt="Profile" className="" width={210} height={70} />
                    </div>

                    <h1 className="font-bold mt-4"> Cloud Trainee (Incoming)</h1>
                    

                    <p className="mt-4"> Aug 4 - Nov 14, 2025 </p>
                </div>

                 {/* ThinkNeuro,LLC Card */}
                 <div className="portfolio-card-effect">
                    <h1 className="font-bold"> ThinkNeuro, LLC : Internship </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/thinkneuro_logo.png" alt="Profile" className="" width={100} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">Summer Associate - Data Research </h1>
                    <h1 className="font-bold"> (BCI & Neuroprosthetics) </h1>
                    
                    <p> <b> | </b> </p>
                    <p> <i>Promoted</i>  </p>
                    <p> <b> | </b> </p>

                    <h1 className="font-bold"> Data Research Intern </h1>
                    

                 
                    <p className="mt-4"> Jun 9 - Aug 7, 2025 </p>
                </div>

                 {/* Basta Card */}
                 <div className="portfolio-card-effect">
                    <h1 className="font-bold"> Basta : Fellowship </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/basta_logo.png" alt="Profile" className="" width={200} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">Tech & Career Fellow</h1>
                    
                
                   
                    <p className="mt-4"> Jun 27 - Sept 5, 2025 </p>
                </div>

                {/* CodePath Card */}
                <div className="portfolio-card-effect">
                    <h1 className="font-bold"> CodePath : Fellowship </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/codepath_logo.png" alt="Profile" className="" width={120} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">Tech Fellow</h1>
                    
                
                    <p className="mt-4"> Jun 3 - Aug 8, 2025 </p>
                </div>

                {/* ColorStack Card */}
                <div className="portfolio-card-effect">
                    <h1 className="font-bold"> ColorStack : Community</h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/colorstack_logo.png" alt="Profile" className="" width={200} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">Member</h1>
                
                    <p className="mt-4"> April, 2025 - Present</p>
                </div>

                {/* CCNY Card */}
                <div className="portfolio-card-effect">
                    <h1 className="font-bold"> The City College Of New York (CCNY) : Part-Time</h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/ccny_logo.png" alt="Profile" className="" width={260} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">STEM Research Mentor</h1>
                    
                
                    
                    <p className="mt-4">  April - Aug, 2024 </p>
                </div>

                   {/* Security Guard Card */}
                   <div className="portfolio-card-effect">
                    <h1 className="font-bold"> Allied Universal : Part-Time</h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/allieduniversal_logo.png" alt="Profile" className="" width={180} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">Security Guard</h1>
                    
                  
                    <p className="mt-4"> Jun, 2022 - Present </p>
                </div>

                </div>
            </div>
        </div>
    </>
  );
}