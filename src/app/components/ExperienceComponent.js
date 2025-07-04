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
            <div className="text-center pb-20 pt-20">
    
                <h1 className={`adaptable-title-size relative z-10 transition-all duration-800 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}> 
                    My Journey So Far
                </h1>
            </div>

            {/* Container */}
            <div className="pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-4 m-4 gap-4">
                {/* COOP Careers Card */}
                <div className="portfolio-card-effect">
                    <h1 className="font-bold"> COOP Careers - Fellowship </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/coopcareers_logo.png" alt="Profile" className="" width={150} height={70} />
                    </div>

                    <h1 className="font-bold mt-4"> Data Analyst Fellow (Incoming)</h1>
                    <p className="mt-4">
                        Selected for COOP Careers highly competitive, cohort-based fellowship focused on launching diverse, first-generation college graduates into careers in data analytics.
                        
                        This 16-week program includes: Hands-on training in Excel, SQL, Tableau, and Python,
                        Weekly workshops on career readiness, resume building, and technical interviewing,
                        Real-world project collaboration with peers and mentors,
                        and One-on-one coaching and job application support
                    </p>

                    <div className="flex justify-center mt-4">
                    <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
                    </div>
                    <p className="mt-4"> Kery | Aug 13 - Dec 3, 2025 </p>
                </div>

                 {/* AWS re/Start Card */}
                 <div className="portfolio-card-effect">
                    <h1 className="font-bold"> AWS re/Start – Program delivered through Per Scholas </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/awsrestart_logo.png" alt="Profile" className="" width={210} height={70} />
                    </div>

                    <h1 className="font-bold mt-4"> Cloud Trainee (Incoming)</h1>
                    <p className="mt-4">
                        Selected for the AWS re/Start Program, a 15-week, full-time cloud computing training delivered through Per Scholas.

                        Hands-on experience with AWS services, Linux, Python, networking, and security,
                        Labs focused on EC2, S3, IAM, VPC, RDS, and monitoring tools,
                        Developed professional readiness, troubleshooting skills, and cloud architecture fundamentals,
                        and Preparing for AWS Certified Cloud Practitioner exam
                    </p>

                    <div className="flex justify-center mt-4">
                    <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
                    </div>
                    <p className="mt-4"> Kery | Aug 4 - Nov 14, 2025 </p>
                </div>

                 {/* ThinkNeuro,LLC Card */}
                 <div className="portfolio-card-effect">
                    <h1 className="font-bold"> ThinkNeuro, LLC - Internship </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/thinkneuro_logo.png" alt="Profile" className="" width={100} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">Summer Associate - Data Research (BCI & Neuroprosthetics)</h1>
                    <p className="mt-4">
                        Promoted to <b>Summer Associate</b> in ThinkNeuro’s 2025 Data Research Internship, 
                        leading a team of 12 focused on Brain-Computer Interfaces (BCI) and Neuroprosthetics. 
                        Oversaw research planning, team coordination, and deliverables. 
                        Guided interns through bibliometric analysis and supported the development of final presentations for the research symposium.
                    </p>

                    <h1 className="font-bold mt-4"> Data Research Intern </h1>
                    <p className="mt-4">
                        Selected as a Data Research Intern for ThinkNeuro's Summer 2025 cohort, contributing to bibliometric research on BCI and Neuroprosthetics.
                        Conducted literature reviews, analyzed citation networks using R, and collaborated with peers to uncover trends in neuroscience research. 
                        Strengthened skills in data analysis, research methods, and scientific communication.
                    </p>

                    <div className="flex justify-center mt-4">
                    <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
                    </div>
                    <p className="mt-4"> Kery | Jun 9 - Aug 7, 2025 </p>
                </div>

                 {/* Basta Card */}
                 <div className="portfolio-card-effect">
                    <h1 className="font-bold"> Basta - Fellowship </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/basta_logo.png" alt="Profile" className="" width={200} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">Tech & Career Fellow</h1>
                    <p className="mt-4">
                        Selected for a competive fellowship supporting first-gen and underrepresented students pursuing careers in tech and business. 
                        Focused on professional development, job readiness, and mentorship.
                    </p>
                
                    <div className="flex justify-center mt-4">
                    <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
                    </div>
                    <p className="mt-4"> Kery | Jun 27 - Sept 5, 2025 </p>
                </div>

                {/* CodePath Card */}
                <div className="portfolio-card-effect">
                    <h1 className="font-bold"> CodePath - Fellowship </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/codepath_logo.png" alt="Profile" className="" width={120} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">Tech Fellow</h1>
                    <p className="mt-4">
                        Accepted into CodePath’s 8-week Intermediate Technical Interview Prep program(TIP102). This course focuses on advanced data structures, algorithms, and coding interview techniques, with an emphasis on problem-solving skills essential for AI/ML engineering roles.
                        I’ll be strengthening my Python skills through LeetCode-style challenges, mock interviews, and peer programming, while receiving mentorship from engineers at leading tech companies.
                    </p>
                
                    <div className="flex justify-center mt-4">
                    <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
                    </div>
                    <p className="mt-4"> Kery | Jun 3 - Aug 8, 2025 </p>
                </div>

                {/* ColorStack Card */}
                <div className="portfolio-card-effect">
                    <h1 className="font-bold"> ColorStack -  Community</h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/colorstack_logo.png" alt="Profile" className="" width={200} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">Community Contributor</h1>
                    <p className="mt-4">
                        As an active member of the ColorStack family, I’m committed to empowering fellow students from underrepresented backgrounds in tech. 
                        I regularly respond to help requests, lend a hand wherever I can, and share internship and fellowship opportunities to support others on their journey. 
                        Whether it's reviewing resumes, giving feedback on LinkedIn profiles, or answering questions about technical interviews, I consistently show up to support others. To me, being part of ColorStack means more than just membership, it’s a family.
                        It’s about giving back, growing together, and building a future where we all rise.
                    </p>
                
                    <div className="flex justify-center mt-4">
                    <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
                    </div>
                    <p className="mt-4"> Kery | April, 2025 - Present</p>
                </div>

                {/* CCNY Card */}
                <div className="portfolio-card-effect">
                    <h1 className="font-bold"> The City College Of New York (CCNY)</h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/ccny_logo.png" alt="Profile" className="" width={260} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">STEM Research Mentor - Part-Time</h1>
                    <p className="mt-4">
                        I've stepped into the rewarding role of a STEM Research Mentor, where I have the privilege of guiding high school students as they embark on their scientific and tech journeys. 
                        From shaping research ideas and refining experiments to analyzing data and navigating challenges, my mission is to empower the next generation of STEM leaders through hands-on support, constructive feedback, and inspiration for what's possible.
                    </p>
                
                    <div className="flex justify-center mt-4">
                    <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
                    </div>
                    <p className="mt-4"> Kery | April - Aug, 2024 </p>
                </div>

                   {/* Security Guard Card */}
                   <div className="portfolio-card-effect">
                    <h1 className="font-bold"> Allied Universal </h1>
                    <div className="flex justify-center mt-4">
                        <Image src="/allieduniversal_logo.png" alt="Profile" className="" width={180} height={70} />
                    </div>

                    <h1 className="font-bold mt-4">Security Guard - Part-Time</h1>
                    <p className="mt-4">
                        As a Physical Security Officer in a Meta location, I safeguard critical infrastructure and support operations by enforcing access control, monitoring systems, and responding to incidents in real time.
                        The role sharpens my ability to stay calm under pressure, follow detailed protocols, and use technical systems for surveillance and incident reporting, all while maintaining a customer first mindset.
                    </p>
                
                    <div className="flex justify-center mt-4">
                    <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
                    </div>
                    <p className="mt-4"> Kery | Jun, 2022 - Present </p>
                </div>

                </div>
            </div>
        </div>
    </>
  );
}